import { useMutation } from '@tanstack/react-query';
import { ApiKindStoriesForm } from '@/shared/api/hooks/stories/mutations/apiKindStoriesForm.ts';
import { CreateStoryWithAuthorRequest } from '@/shared/api/hooks/stories/types.ts';

export function useCreateStory() {
  const { mutateAsync, isPending, isError, isSuccess, error } = useMutation({
    mutationFn: (data: FormData) => ApiKindStoriesForm.createKindStory(data),
  });

  return {
    isError,
    isSuccess,
    isPending,
    error,
    createStory: mutateAsync,
  };
}

export function useCreateStoryAddAuthors() {
  const mutation = useMutation({
    mutationFn: (data: CreateStoryWithAuthorRequest) =>
      ApiKindStoriesForm.createKindStoryAddAuthors(data),
  });

  return {
    isLoading: mutation.isPending,
    isError: mutation.isError,
    isSuccess: mutation.isSuccess,
    error: mutation.error,
    createStoryAddAuthors: mutation.mutateAsync,
  };
}

export function useCreateStoryAddImages() {
  const mutation = useMutation({
    mutationFn: (data: FormData) => ApiKindStoriesForm.createKindStoryAddImages(data),
  });

  return {
    isLoading: mutation.isPending,
    isError: mutation.isError,
    isSuccess: mutation.isSuccess,
    error: mutation.error,
    createStoryAddImages: mutation.mutateAsync,
  };
}
