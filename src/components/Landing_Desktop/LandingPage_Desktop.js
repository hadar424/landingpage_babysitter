import React from "react";
import LandingToolbarD from "./LandingToolBar_Desktop.js";
import { Container, Row, Col } from "react-grid-system";
import "./LandingPage_Desktop.css";
import phone from "../images/phone.svg";
import people from "../images/people_background.svg";
import FacebookIcon from "../images/menu/facebook.svg";
import WhatsappIcon from "../images/whatsapp-icon.svg";
import EmailOutlinedIcon from "../images/mail-icon.svg";
import PhoneInTalkIcon from "../images/phone-icon.svg";
import ReactPlayer from "react-player";
import contact_background from "../images/contact-background.svg";

class LandingPageD extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      landingMenuOpen: false,
    };
  }

  landingMenuClickHandler = () => {
    this.setState((prevState) => {
      return { landingMenuOpen: !prevState.landingMenuOpen };
    });
  };

  landingBackDropClickHandler = () => {
    var e = document.getElementById("topD");
    e.scrollIntoView(true);
    this.setState({ landingMenuOpen: false });
  };

  landingScrollFunction1 = () => {
    var e = document.getElementById("on_the_projectD");
    e.scrollIntoView(true);
    this.setState({ landingMenuOpen: false });
  };

  landingScrollFunction2 = () => {
    var e = document.getElementById("aleh_for_youD");
    e.scrollIntoView(true);
    this.setState({ landingMenuOpen: false });
  };

  landingScrollFunction3 = () => {
    var e = document.getElementById("contactD");
    e.scrollIntoView(true);
    this.setState({ landingMenuOpen: false });
  };

  render() {
    return (
      <div className="landing_wrapperD">
        <div>
          <LandingToolbarD
            landingDrawerClickHandler={this.landingMenuClickHandler}
            Scroll_function1={this.landingScrollFunction1}
            Scroll_function2={this.landingScrollFunction2}
            Scroll_function3={this.landingScrollFunction3}
          />
        </div>
        <div className="title_backgroundD">
          <img src={phone} className="iphone_logo_styleD" />
          <p className="main_titleD" id="topD">
            בייביסיטר <br></br>מיוחד במינו
          </p>
          <hr className="line_dividerD" />
          <p className="title_pD">
            בייביסיטר מיוחד במינו בשיתוף 'עלה בשבילכם' מציע חיבור <br></br> בין
            הורים לילדים מיוחדים לבייביסיטרים פוטנציאליים מתחום <br></br> החינוך
            המיוחד.
          </p>
        </div>
        <div className="landing_background_style1D">
          <p className="title1D" id="on_the_projectD">
            אז,
            <br></br> מי אנחנו?
          </p>
          <p className="p1D">
            את הפרויקט "בייביסיטר מיוחד במינו" הקימה הגב' נעמי אבנר - אמא לילד
            עם פגיעה מוחית <br></br>קשה, אשר ראתה את הצורך בבייביסיטר להורים
            לילדים מיוחדים, ורתמה סטודנטיות לחינוך<br></br> מיוחד לפיתוח והפעלת
            הפרויקט.
          </p>
          <p className="p1D">
            מטרת הפרויקט היא להרחיב את מאגר הבייביסיטרים וכך לאפשר למספר מירבי
            של<br></br> הורים לילדים מיוחדים, רווחה ומרווח נפשי, והאפשרות להשקיע
            בעצמם בזמן שהם יודעים<br></br> שילדיהם נמצאים בידיים טובות.
          </p>
          <p className="p1D">
            "בייביסיטר מיוחד במינו" מהווה פלטפורמה ל"שידוך" בין בייביסיטר מתאים
            לבין ילדים עם<br></br> צרכים מיוחדים.
          </p>
          <p className="p1D">
            פרוייקט "בייביסיטר מיוחד במינו" למעשה מאפשר להורים לקחת קצת "אוויר
            לנשימה" בעת<br></br> שילדיהם נשארים מספר שעות ביום, או בשבוע בידיהם
            הטובות של סטודנטים לחינוך מיוחד<br></br> או בייביסיטרים בעלי הכשרות
            שונות, חינוכיות או רפואיות מקצועיות.
            <br></br>
            זו הינה הזדמנות מצוינת עבור הבייביסיטרים ללמוד עוד וליישם את שלמדו,
            ובאותה נשימה גם<br></br> להרוויח כסף ולתרום מהשעות הפנויות שלהם, על
            מנת שההורים יוכלו לקחת מעט זמן לעניינם.
          </p>
          <a
            href="https://babysitterkoda-1a3df.firebaseapp.com/"
            className="register_button1D"
          >
            להתחברות / הרשמה
          </a>
          <div className="video_styleD">
            <ReactPlayer url="https://youtu.be/xcYeasNGOj4" width="40%" />
          </div>
        </div>
        <div className="landing_background_style2D">
          <p className="title1D" id="aleh_for_youD">
            עלה
            <br></br> בשבילכם
          </p>
          <p className="p1D">
            "עלה בשבילכם" הנו מרכז ייחודי מבית רשת 'עלה' בישראל ובשיתוף משרד
            <br></br>
            הרווחה, המספק שירותי מידע, תמיכה וליווי ללא תשלום עבור משפחות לילדים
            <br></br>
            עם מוגבלויות מורכבות. במרכז פועלים מגוון שירותים- קו חם לייעוץ
            והכוונה,<br></br> הורים מלווים הורים וכן קבוצות תמיכה המונחות על ידי
            אנשי מקצוע.
          </p>
          <p className="p1D">
            <br></br>שירותים אלה מספקים מענה לשאלות, התלבטויות ואתגרים בהם
            נתקלים הורים
            <br></br>בצמתים שונים בחיי ילדם המיוחד; החל מרגע האבחנה, דרך מסגרות
            חינוך
            <br></br>וטיפול לאורך השנים והמשך במיצוי זכויות. אנו שואפים לתת מענה
            לסימני
            <br></br>השאלה וחוסר האונים שהינם - לעתים קרובות - חלק בלתי נפרד
            מהחיים<br></br> כהורים לילדים עם מוגבלויות, בכל שלב וגיל.
          </p>
          <a
            href="https://babysitterkoda-1a3df.firebaseapp.com/"
            className="register_button1D"
          >
            להתחברות / הרשמה
          </a>
        </div>
        <img src={people} className="people_logo_styleD" />
        <div className="landing_background_style3D">
          <p className="title1D" id="contactD">
            יש לכם שאלה?
            <br></br> דברו איתנו
          </p>
          <p className="p1D">
            מעוניינים לקחת חלק בפרוייקט, אך עדיין מתלבטים ולא סגורים על כל
            הפרטים?
            <br></br>
            מוזמנים ליצור איתנו קשר באחת מהדרכים הבאות:
          </p>
          <div className="contactD">
            <Container className="contact_tableD">
              <Row style={{ marginBottom: 10 }}>
                <Col width="20%">
                  <img src={EmailOutlinedIcon} width="35" height="35" />
                </Col>
                <Col width="80%">bbmeychad@gmail.com</Col>
              </Row>
              <Row style={{ marginBottom: 10 }}>
                <Col width="20%">
                  <img src={WhatsappIcon} width="35" height="35" />
                </Col>
                <Col width="80%">055-6876741</Col>
              </Row>
              <Row style={{ marginBottom: 10 }}>
                <Col width="20%">
                  <img src={PhoneInTalkIcon} width="35" height="35" />
                </Col>
                <Col width="80%"> 'עלה בשבילכם' 1-800-201-077</Col>
              </Row>
              <Row style={{ marginBottom: 10 }}>
                <Col width="20%">
                  <img src={FacebookIcon} width="35" height="35" />
                </Col>
                <Col width="80%">"בייביסיטר מיוחד במינו"</Col>
              </Row>
            </Container>
          </div>
          <a
            href="https://babysitterkoda-1a3df.firebaseapp.com/"
            className="register_button1D"
          >
            להתחברות / הרשמה
          </a>
        </div>
        <img src={contact_background} className="contact_logo_styleD" />
      </div>
    );
  }
}

export default LandingPageD;
