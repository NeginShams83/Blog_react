import "./Footer.css";

function Footer() {
  return (
    <footer id="client-footer">
      <div id="footer-headline">
        <h5 id="footer-title">
          می‌خواهید ری‌اکت را حرفه‌ای یاد بگیرید؟ از همین امروز شروع کنید!
        </h5>
        <p className="footer-caption">
          با آموزش‌های کاربردی و پروژه‌محور، مهارت‌های فرانت‌اند خود را تقویت
          کنید. از مفاهیم پایه تا ساخت اپلیکیشن‌های مدرن، همراه شما هستیم تا به
          یک توسعه‌دهنده حرفه‌ای تبدیل شوید و رزومه‌ای قدرتمند بسازید!
        </p>

        <div className="footer-cta flex items-center justify-center gap-4">
          <button className="btn primary-btn">
            <span className="icon">
              <i className="fa-solid fa-circle-play"></i>
            </span>
            شروع یادگیری ری‌اکت
          </button>
          <button className="btn secondary-btn">مشاهده دوره‌ها</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
