import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layout-component/LeftNavbar";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div className="font-Poppins">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="w-11/12 mx-auto py-2">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto py-2 grid grid-cols-12">
        <aside className="left col-span-3">
          <LeftNavbar></LeftNavbar>
        </aside>
        <section className="col-span-6">Main Content</section>
        <aside className="right col-span-3">Right Navbar</aside>
      </main>
    </div>
  );
};

export default HomeLayout;
