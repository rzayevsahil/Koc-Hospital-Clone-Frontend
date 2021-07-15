import "./footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer_article">
          <article>
            <h3>MERKEZLERİMİZ</h3>
            <ul></ul>
          </article>
          <article>
            <h3>BÖLÜMLERİMİZ</h3>
            <ul></ul>
          </article>
          <article>
            <h3>DOKTORLARIMIZ</h3>
            <ul></ul>
          </article>
          <article>
            <h3>MÜKEMMELİYET MERKEZİ</h3>
            <ul></ul>
          </article>
          <article>
            <h3>HABERLER</h3>
            <ul></ul>
          </article>
          <article>
            <h3>BASIN ODASI</h3>
            <ul></ul>
          </article>
          <article>
            <h3>MERKEZLERİMİZ</h3>
            <ul></ul>
          </article>
          <article>
            <h3>MERKEZLERİMİZ</h3>
            <ul></ul>
          </article>
        </div>

        <div className="footer_article">
          <article>
            <h3>Kurumsal</h3>
            <ul>
                <li>Yönetim Kurulu</li>
                <li>Değerlerimiz</li>
                <li>Tarihçe</li>
                <li>Ceo Mesajı</li>
                <li>Sosyal Sorumluluk</li>
            </ul>
          </article>
          <article>
            <h3>MERKEZLERİMİZ</h3>
            <ul></ul>
          </article>
          <article>
            <h3>MERKEZLERİMİZ</h3>
            <ul>
                <li>Yönetim Kurulu</li>
                <li>Değerlerimiz</li>
                <li>Tarihçe</li>
             
            </ul>
          </article>
        </div>
        <div className="footer_article">
          <article>
            <h3>Kurumsal</h3>
            <ul>
                <li>Yönetim Kurulu</li>
                <li>Değerlerimiz</li>
                <li>Tarihçe</li>
                <li>Ceo Mesajı</li>
                <li>Sosyal Sorumluluk</li>
            </ul>
          </article>
          <article>
            <h3>MERKEZLERİMİZ</h3>
            <ul></ul>
          </article>
          <article>
            <h3>MERKEZLERİMİZ</h3>
            <ul>
                <li>Yönetim Kurulu</li>
                <li>Değerlerimiz</li>
                <li>Tarihçe</li>
             
            </ul>
          </article>
        </div>
        <div className="flex-right">
            <h3>İLETİŞİM FORMU</h3>
            <p>Alanında uzman kadromuz en kısa sürede sorularınızı yanıtlayacaktır.</p>
        <div className="input-container">
                    <input type="text"  id="nameContact" className="contact-icerik" placeholder="İsim Soyisim" required/>
                </div>
                <div class="input-container">
                    <input type="text"  id="telepgoneContact" className="contact-icerik" placeholder="Telephone" required/>
                </div>
                <div class="input-container">
                    <input type="email" id="emailContact" className="contact-icerik" placeholder="E posta" required />
                </div>
                <div class="input-container">
                    <input type="text"  id="titleContact" className="contact-icerik" placeholder="Başlık" required/>
                </div>
                <div class="input-container"><textarea name="message" id="" className="contact-içerik" cols="30" rows="10" placeholder="Mesajınız"></textarea></div>
                <div >
                    <button type="submit" className="contact-btn" id="submitContact" title="Mesajını Gönder">Gönder
                    </button>
                </div>
                </div>
      </div>
    </footer>
  );
}
