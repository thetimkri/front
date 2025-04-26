import { colors } from '@/shared/constants/colors';
import styled from 'styled-components';

export const EditorContainer = styled.div<{ $hasError?: boolean }>`
  position: relative;
  margin-bottom: 10px;

  .editor-container__editor {
    border-radius: 16px;
    border: 1px solid ${(props) => (props.$hasError ? `${colors.error}` : `none`)};
    height: 234px;
    background-color: ${colors.input};
    margin-bottom: ${(props) => (props.$hasError ? `25px` : `10px`)};
  }

  .editor-footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    min-height: 20px;
    gap: 8px;
    margin-top: 4px;
  }

  .editor-error {
    width: 100%;
  }

  .editor-counter {
    display: ${(props) => (props.$hasError ? `none` : `block`)};
    position: absolute;
    right: 0;
  }

  .ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable) {
    border-radius: 16px;
    border: none;
    height: 232px;
    background-color: ${colors.input};
    box-shadow: none;
  }

  .ck.ck-content.ck-editor__editable.ck-rounded-corners.ck-editor__editable_inline.ck-blurred {
    border: none;
    height: 232px;
  }
`;
