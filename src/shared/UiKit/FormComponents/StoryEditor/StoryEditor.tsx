// Создайте новый компонент StoryEditor.tsx:

import React, { useRef, useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import { Control, Controller } from 'react-hook-form';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { BalloonEditor } from 'ckeditor5';
import { EditorContainer } from './StoryEditor.styled';
import { editorConfig } from './StoryEditorConfig';
import { FormTypes } from '@/shared/UiKit/FormComponents/FormTypes';
import InputCharCounter from '@/shared/UiKit/FormComponents/InputCharCounter/InputCharCounter';
import { getStoryValidationRules } from '@/shared/constants/validationRules/validationText';
import ErrorMessage from '@/shared/UiKit/FormComponents/ErrorMessage/ErrorMessage';
import type { BalloonEditor as BalloonEditorType } from '@ckeditor/ckeditor5-editor-balloon';

interface StoryEditorProps {
  control: Control<FormTypes>;
  onEditorReady?: (editor: BalloonEditorType) => void;
}

export interface StoryEditorRef {
  clearEditor: () => void;
  setContent: (content: string) => void;
}

const maxStoryLength = 10000;
const minStoryLength = 100;

const StoryEditor = forwardRef<StoryEditorRef, StoryEditorProps>(
  ({ control, onEditorReady }, ref) => {
    const editorRef = useRef<BalloonEditorType | null>(null);
    const editorContainerRef = useRef<HTMLDivElement>(null);
    const [editorContent, setEditorContent] = useState<string>('');
    const [validationError, setValidationError] = useState<string | undefined>();
    const [charCount, setCharCount] = useState<number>(0);

    const stripHtmlTags = (html: string): string => {
      if (!html) return '';
      const stripped = html.replace(/<\/?[^>]+(>|$)/g, '');
      const parser = new DOMParser();
      return (
        parser.parseFromString(stripped, 'text/html').documentElement.textContent || ''
      ).trim();
    };

    const checkRepeatingText = (text: string): boolean => {
      const lines = text
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line.length > 0);
      if (lines.length < 3) return false;

      let repeatingCount = 1;
      let maxRepeatingCount = 1;
      let currentLine = lines[0];

      for (let i = 1; i < lines.length; i++) {
        if (lines[i] === currentLine) {
          repeatingCount++;
          if (repeatingCount > maxRepeatingCount) {
            maxRepeatingCount = repeatingCount;
          }
        } else {
          currentLine = lines[i];
          repeatingCount = 1;
        }
      }

      return maxRepeatingCount > lines.length * 0.3;
    };

    const validateContent = (text: string): string | undefined => {
      const rules = getStoryValidationRules(minStoryLength, maxStoryLength, true);
      const cleanText = stripHtmlTags(text);
      const textLength = cleanText.length;

      if (textLength < rules.minLength.value) {
        return rules.minLength.message;
      }

      if (textLength > rules.maxLength.value) {
        return rules.maxLength.message;
      }

      if (!rules.pattern.value.test(cleanText)) {
        return rules.pattern.message;
      }

      if (checkRepeatingText(cleanText)) {
        return 'Текст содержит слишком много повторяющихся строк';
      }

      return undefined;
    };

    useImperativeHandle(ref, () => ({
      clearEditor: () => {
        if (editorRef.current) {
          editorRef.current.setData('');
          setEditorContent('');
          setCharCount(0);
          setValidationError(undefined);
        }
      },
      setContent: (content: string) => {
        if (editorRef.current) {
          editorRef.current.setData(content);
          setEditorContent(content);
          setCharCount(stripHtmlTags(content).length);
          setValidationError(validateContent(content));
        }
      },
    }));

    useEffect(() => {
      return () => {
        if (editorRef.current) {
          editorRef.current.setData('');
        }
      };
    }, []);

    return (
      <Controller<FormTypes>
        name="description"
        control={control}
        defaultValue=""
        rules={{
          validate: (value) => {
            const error = validateContent(value as string);
            return error ? error : true;
          },
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          const errorMessage = error?.message || validationError;

          return (
            <EditorContainer ref={editorContainerRef} $hasError={!!errorMessage}>
              <div className="editor-container__editor">
                <div>
                  <CKEditor
                    editor={BalloonEditor}
                    config={editorConfig}
                    data={(value as string) || editorContent}
                    onReady={(editor) => {
                      editorRef.current = editor;
                      if (onEditorReady) {
                        onEditorReady(editor);
                      }
                    }}
                    onChange={(_event, editor) => {
                      const data = editor.getData();
                      const cleanData = stripHtmlTags(data);
                      const currentLength = cleanData.length;

                      setEditorContent(data);
                      setCharCount(currentLength);
                      setValidationError(validateContent(data));
                      onChange(data);
                    }}
                  />
                  <div className="editor-footer">
                    {errorMessage && (
                      <div className="editor-error">
                        <ErrorMessage message={errorMessage} />
                      </div>
                    )}
                    <div className="editor-counter">
                      <InputCharCounter length={charCount} maxLength={maxStoryLength} />
                    </div>
                  </div>
                </div>
              </div>
            </EditorContainer>
          );
        }}
      />
    );
  }
);

StoryEditor.displayName = 'StoryEditor';

export default StoryEditor;
