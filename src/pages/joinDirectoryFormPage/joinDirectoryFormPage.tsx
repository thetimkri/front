import { JoinDirectoryForm } from '@/features/joinDirectoryForm/ui/joinDirectoryForm.tsx';
import JoinDirectoryFormPageTextSection from '@/pages/joinDirectoryFormPage/ui/joinDirectoryFormPageTextSection.tsx';

const JoinDirectoryFormPage = () => {
  return (
    <>
      <JoinDirectoryFormPageTextSection />
      <JoinDirectoryForm />
    </>
  );
};

export default JoinDirectoryFormPage;
