import JoinTeamPageTextSection from '@/pages/joinTeamPage/ui/JoinTeamPageTextSection.tsx';
import { JoinTeamForm } from '@/features/joinTeamForm/ui/joinTeamForm.tsx';

const JoinTeamPage = () => {
  return (
    <>
      <JoinTeamPageTextSection />
      <JoinTeamForm />
    </>
  );
};

export default JoinTeamPage;
