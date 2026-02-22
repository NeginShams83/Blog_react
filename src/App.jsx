import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Article from "./Components/Article/Article";

import "./App.css";

function App() {
  return (
    <div>
      <Header />

      <main>
        <section
          id="hero-section"
          className="container flex items-center justify-between"
        >
          <div id="headline">
            <h1 id="title">مرجع آموزش حرفه‌ای ری‌اکت و برنامه‌نویسی وب</h1>
            <p id="caption">
              اینجا فضایی برای یادگیری عمیق برنامه‌نویسی و به‌اشتراک‌گذاری دانش
              است. مقالات آموزشی، نکات کاربردی و پروژه‌های رزومه‌ای با زبانی
              ساده و حرفه‌ای ارائه می‌شوند. هدف ما کمک به شماست تا مهارت‌هایتان
              را تقویت کنید و با ساخت پروژه‌های جذاب، رزومه‌ای قدرتمند بسازید!
            </p>
            <div id="hero-btns" className="gap-2">
              <button className="btn primary-btn">شروع یادگیری</button>
              <button className="btn secondary-btn">مشاهده دوره‌ها</button>
            </div>
          </div>
          <div id="image-container">
            <img src="/Images/hero-illustrator.png" alt="hero illustration" />
          </div>
        </section>

        <section id="articles-section">
          <div id="articles-header" className="container flex justify-between">
            <h2 id="section-title">مقالات اخیر</h2>
            <a href="#" className="read-more">
              {" "}
              بیشتر بخوانید{" "}
            </a>
          </div>

          <div id="items" className="container">
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
