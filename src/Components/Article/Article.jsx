function Article() {
  return (
    <>
      <article className="article-card">
        <header>
          <img
            src="/Images/clay-banks-cReV-cbE2L4-unsplash.jpg"
            alt="article img"
          />
        </header>
        <main className="article-body">
          <h4 className="article-title">شروع حرفه‌ای با ری‌اکت</h4>
          <p className="article-caption">
            یادگیری ری‌اکت می‌تونه نقطه عطفی در مسیر شغلی‌تون باشه. در این مقاله
            از مفاهیم پایه مثل کامپوننت‌ها و Hooks شروع می‌کنیم و تا ساخت یک
            پروژه واقعی پیش می‌ریم. نکات کلیدی برای مدیریت State و رندرینگ بهینه
            رو هم فراموش نکردیم. اگر می‌خواید وارد دنیای توسعه وب مدرن بشید، این
            مطلب اولین قدم شماست.
          </p>
        </main>
        <div className="divider"></div>
        <footer className="article-footer flex justify-between">
          <div>
            <div className="author-label flex items-center gap-1">
              <i className="fa-solid fa-user"></i>
              <span> نویسنده: </span>
              <span className="author-name"> نگین شمس</span>
            </div>
          </div>
          <div>
            <div className="published-date flex items-center gap-2">
              <i className="fa-solid fa-calendar"></i>
              <span> اسفند 1404 </span>
            </div>
          </div>
        </footer>
      </article>
    </>
  );
}

export default Article;
