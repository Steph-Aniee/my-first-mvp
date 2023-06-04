import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Pages.css";

export default function Visit_the_Cafe({ language, onLanguageChange }) {
  return (
    <>
      <div className="top">
        <div className="lang-buttons">
          <button className="german" onClick={() => onLanguageChange("de")}>
            Deutsch
          </button>
          <button className="english" onClick={() => onLanguageChange("en")}>
            English
          </button>
          <button className="french" onClick={() => onLanguageChange("fr")}>
            Français
          </button>
        </div>
        <h1>
          <img
            className="logo"
            style={{ transform: "scaleX(-1)" }}
            src=".\src\assets\mad_choc_logo.png"
          />
          Mademoiselle Chocoholic
          <img className="logo" src=".\src\assets\mad_choc_logo.png" />
        </h1>
        <nav>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <NavLink to="/" activeclassname="active" className="nav-link">
                {language === "en" && `Home`}
                {language === "de" && `Homepage`}
                {language === "fr" && `Accueil`}
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu" activeclassname="active" className="nav-link">
                {language === "en" && `Menu`}
                {language === "de" && `Speisekarte`}
                {language === "fr" && `Menu`}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/visit-the-cafe"
                activeclassname="active"
                className="nav-link"
              >
                {language === "en" && `Visit the Café`}
                {language === "de" && `Besuchen Sie uns`}
                {language === "fr" && `Visitez le Café`}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="below">
        {" "}
        {language === "en" && (
          <div className="aboutPage">
            <div className="welcome">
              <h6>
                <i>Welcome to Mademoiselle Chocoholic!</i>
              </h6>
              <img
                className="cafeImage"
                src={
                  "https://images.unsplash.com/photo-1573822028151-731623cb0722?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80"
                }
                alt="fake image of the cafe"
              />
            </div>{" "}
            <p>
              ... a delightful haven for chocolate enthusiasts, where dreams are
              made of cocoa! Let us introduce you to the creative genius behind
              this chocolate wonderland, known as Mad Chocoholic to her loyal
              customers, and affectionately called Pinky by her friends and
              family.
            </p>{" "}
            <p>
              Pinky is renowned for her extraordinary chocolate creations that
              never fail to captivate taste buds and ignite pure joy. What sets
              her treats apart is the careful selection of regional, fairly
              traded, environmentally friendly, organic, and vegan ingredients.
              She believes in the importance of sustainability and sources her
              ingredients from local farmers, ensuring a positive impact on both
              the community and the planet. Passionate about self-sufficiency,
              Pinky cultivates her own ingredients, bringing a touch of love and
              dedication to every chocolate masterpiece.
            </p>
            <p>
              The cocoa used in her creations is procured from a family-owned
              farm in Ecuador, where fair prices are paid to support their
              livelihoods. This commitment to ethical sourcing ensures that each
              bite of her delectable chocolates tells a story of sustainability
              and responsibility.
            </p>
            <p>
              At Mademoiselle Chocoholic, you'll find an extensive menu of
              indulgent delights, ranging from the enticing chocolate chili sin
              carne to the timeless classic, hazelnut choc latte. With every
              bite, you'll experience the harmonious fusion of flavors and the
              dedication poured into each creation.
            </p>
            <p>
              Pinky's cafe has become a gathering place for chocolate
              enthusiasts not only from Austria but also from far and wide,
              drawn by the irresistible allure of her confectionery delights.
            </p>
            <p>
              We invite you to embark on a chocolate adventure and immerse
              yourself in the whimsical world of Mademoiselle Chocoholic. Come
              visit us soon at our enchanting location on{" "}
              <strong>Wonka Street 71</strong>, in the picturesque town of{" "}
              <strong>Maria Enzersdorf, Austria</strong>.
            </p>
            <p>
              For any inquiries or to make a reservation, you can reach us via
              email at <strong>mad@chocoholic.com</strong>.
            </p>
            <p>
              Don't forget to explore our tantalizing{" "}
              <Link to="/menu" className="linkStyle">
                menu
              </Link>
              , where each item is a testament to Pinky's creativity and passion
              for all things chocolate.
            </p>
            <p>
              We can't wait to welcome you and share the magic of Mademoiselle
              Chocoholic with you. Get ready to surrender to the sweet
              temptation!
            </p>
            <p>
              <i>
                Please note that the address, email, and other details mentioned
                above are fictional and provided solely for illustrative
                purposes.
              </i>
            </p>
          </div>
        )}
        {language === "de" && (
          <div className="aboutPage">
            <div className="welcome">
              <h6>
                <i>Willkommen bei Mademoiselle Chocoholic!</i>
              </h6>
              <img
                className="cafeImage"
                src={
                  "https://images.unsplash.com/photo-1573822028151-731623cb0722?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80"
                }
                alt="Fantasie-Bild des Cafés`) "
              />
            </div>{" "}
            <p>
              ... einem bezaubernden Refugium für Schokoladenliebhaber, wo
              Träume aus Kakao gemacht werden! Lassen Sie uns die kreative Genie
              hinter dieser Schokoladen-Wunderwelt vorstellen, bekannt als Mad
              Chocoholic für ihre treuen Kunden und liebevoll von ihren Freunden
              und Familie als Pinky bezeichnet.
            </p>
            <p>
              Pinky ist bekannt für ihre außergewöhnlichen
              Schokoladenkreationen, die die Geschmacksknospen fesseln und pure
              Freude entfachen. Was ihre Leckereien besonders macht, ist die
              sorgfältige Auswahl regionaler, fair gehandelter,
              umweltfreundlicher, biologischer und veganer Zutaten. Sie glaubt
              an die Bedeutung von Nachhaltigkeit und bezieht ihre Zutaten von
              lokalen Bauern, um eine positive Wirkung auf die Gemeinschaft und
              den Planeten zu gewährleisten.
            </p>
            <p>
              Mit viel Hingabe kultiviert Pinky viele ihrer eigenen Zutaten und
              bringt so eine Prise Liebe und Engagement in jedes
              Schokoladenmeisterwerk. Der Kakao, der in ihren Kreationen
              verwendet wird, stammt von einer familiengeführten Farm in
              Ecuador, wo gerechte Preise gezahlt werden, um ihren
              Lebensunterhalt zu unterstützen. Dieses Bekenntnis zum ethischen
              Einkauf gewährleistet, dass jeder Bissen ihrer köstlichen
              Schokolade eine Geschichte von Nachhaltigkeit und Verantwortung
              erzählt.
            </p>
            <p>
              Bei Mademoiselle Chocoholic finden Sie eine umfangreiche
              Speisekarte mit verlockenden Köstlichkeiten, angefangen bei der
              fesselnden Schokoladen-Chili-sin-Carne bis hin zum zeitlosen
              Klassiker, dem Haselnuss-Schoko-Latte. Mit jedem Bissen erleben
              Sie die harmonische Verschmelzung der Aromen und die Hingabe, die
              in jede Kreation einfließt.
            </p>
            <p>
              Pinkys Café ist ein Treffpunkt für Schokoladenliebhaber nicht nur
              aus Österreich, sondern auch aus der ganzen Welt, angezogen von
              der unwiderstehlichen Anziehungskraft ihrer süßen Versuchungen.
            </p>
            <p>
              Wir laden Sie ein, sich auf ein Schokoladenabenteuer einzulassen
              und in die märchenhafte Welt von Mademoiselle Chocoholic
              einzutauchen. Besuchen Sie uns bald an unserem bezaubernden
              Standort in der{" "}
              <strong>Wonkastraße 71 - Maria Enzersdorf, Österreich</strong>.
            </p>
            <p>
              Für Anfragen oder Reservierungen können Sie uns per E-Mail unter{" "}
              <strong>mad@chocoholic.com</strong> erreichen. Vergessen Sie
              nicht, unsere verlockende{" "}
              <Link to="/menu" className="linkStyle">
                Speisekarte
              </Link>{" "}
              zu erkunden, bei der jedes Gericht ein Zeugnis für Pinkys
              Kreativität und Leidenschaft für alles, was mit Schokolade zu tun
              hat, ist.
            </p>
            <p>
              Wir können es kaum erwarten, Sie willkommen zu heißen und die
              Magie von Mademoiselle Chocoholic mit Ihnen zu teilen. Machen Sie
              sich bereit, der süßen Versuchung zu erliegen!
            </p>
            <p>
              <i>
                Bitte beachten Sie, dass die oben genannten Adresse, E-Mail und
                andere Details fiktiv sind und nur zu illustrativen Zwecken
                dienen.
              </i>
            </p>
          </div>
        )}
        {language === "fr" && (
          <div className="aboutPage">
            <div className="welcome">
              <h6>
                <i>Bienvenue chez Mademoiselle Chocoholic!</i>
              </h6>

              <img
                className="cafeImage"
                src={
                  "https://images.unsplash.com/photo-1573822028151-731623cb0722?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80"
                }
                alt="image fictive du café"
              />
            </div>{" "}
            <p>
              ... un havre délicieux pour les amateurs de chocolat, où les rêves
              sont faits de cacao ! Permettez-nous de vous présenter le génie
              créatif derrière ce paradis chocolaté, connu sous le nom de Mad
              Chocoholic par ses fidèles clients et affectueusement surnommé
              Pinky par ses amis et sa famille.
            </p>
            <p>
              Pinky est renommée pour ses créations chocolatées extraordinaires
              qui ne manquent jamais de captiver les papilles gustatives et
              d'allumer une joie pure. Ce qui distingue ses friandises, c'est la
              sélection minutieuse d'ingrédients régionaux, équitables,
              respectueux de l'environnement, biologiques et végétaliens. Elle
              croit en l'importance de la durabilité et se procure ses
              ingrédients auprès de producteurs locaux, garantissant ainsi un
              impact positif sur la communauté et la planète. Passionnée
              d'autosuffisance, Pinky cultive elle-même bon nombre de ses
              ingrédients, apportant une touche d'amour et de dévouement à
              chaque chef-d'œuvre chocolaté.
            </p>
            <p>
              Le cacao utilisé dans ses créations provient d'une exploitation
              familiale en Équateur, où des prix équitables sont payés pour
              soutenir leur subsistance. Cet engagement envers
              l'approvisionnement éthique garantit que chaque bouchée de ses
              délicieux chocolats raconte une histoire de durabilité et de
              responsabilité.
            </p>
            <p>
              Chez Mademoiselle Chocoholic, vous trouverez un vaste menu de
              délices tentants, allant du piment au chocolat sin carne au
              classique intemporel, le latte au chocolat aux noisettes. À chaque
              bouchée, vous vivrez la fusion harmonieuse des saveurs et le
              dévouement mis dans chaque création.
            </p>
            <p>
              Le café de Pinky est devenu un lieu de rencontre pour les amateurs
              de chocolat non seulement d'Autriche, mais aussi de loin, attirés
              par l'irrésistible attrait de ses délices sucrés.
            </p>
            <p>
              Nous vous invitons à vous embarquer dans une aventure chocolatée
              et à vous plonger dans le monde fantaisiste de Mademoiselle
              Chocoholic. Venez nous rendre visite bientôt dans notre lieu
              enchanteur, situé au{" "}
              <strong>71 Wonka Street à Maria Enzersdorf, en Autriche</strong>.
            </p>
            <p>
              Pour toute demande de renseignements ou pour effectuer une
              réservation, vous pouvez nous contacter par e-mail à l'adresse{" "}
              <strong>mad@chocoholic.com</strong>. N'oubliez pas d'explorer{" "}
              <Link to="/menu" className="linkStyle">
                notre menu
              </Link>{" "}
              tentant, où chaque plat est le témoignage de la créativité de
              Pinky et de sa passion pour tout ce qui concerne le chocolat.
            </p>
            <p>
              Nous avons hâte de vous accueillir et de partager avec vous la
              magie de Mademoiselle Chocoholic. Préparez-vous à vous rendre à la
              tentation sucrée!{" "}
            </p>
            <p>
              <i>
                Veuillez noter que l'adresse, l'e-mail et les autres détails
                mentionnés ci-dessus sont fictifs et fournis uniquement à des
                fins d'illustration.
              </i>
            </p>
          </div>
        )}
      </div>
    </>
  );
}
