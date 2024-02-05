import Navbar from "../components/Navbar";
interface Props {
  children: React.ReactNode;
}
const AppLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main className="container">{children}</main>
    </>
  );
};

export default AppLayout;
