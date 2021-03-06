import React from "react";
import LandingToolbar from "./LandingToolBar.js";
import LandingSideDrawer from "./LandingSideDrawer";
import LandingBackDrop from "./LandingBackDrop";
import { Container, Row, Col } from "react-grid-system";
import "./LandingPage.css";
import phone from "../images/phone.svg";
import people from "../images/people_background.svg";
import FacebookIcon from "../images/menu/facebook.svg";
import WhatsappIcon from "../images/whatsapp-icon.svg";
import EmailOutlinedIcon from "../images/mail-icon.svg";
import PhoneInTalkIcon from "../images/phone-icon.svg";
import ReactPlayer from "react-player";
import contact_background from "../images/contact-background.svg";

class LandingPage extends React.Component {
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
    var e = document.getElementById("top");
    e.scrollIntoView(true);
    this.setState({ landingMenuOpen: false });
  };

  landingScrollFunction1 = () => {
    var e = document.getElementById("on_the_project");
    e.scrollIntoView(true);
    this.setState({ landingMenuOpen: false });
  };

  landingScrollFunction2 = () => {
    var e = document.getElementById("aleh_for_you");
    e.scrollIntoView(true);
    this.setState({ landingMenuOpen: false });
  };

  landingScrollFunction3 = () => {
    var e = document.getElementById("contact");
    e.scrollIntoView(true);
    this.setState({ landingMenuOpen: false });
  };

  render() {
    let landingSideDrawer;
    let landingBackDrop;

    if (this.state.landingMenuOpen) {
      landingSideDrawer = (
        <LandingSideDrawer
          closeLandingMenu={this.landingBackDropClickHandler}
          Scroll_function1={this.landingScrollFunction1}
          Scroll_function2={this.landingScrollFunction2}
          Scroll_function3={this.landingScrollFunction3}
        />
      );
      landingBackDrop = (
        <LandingBackDrop click={this.landingBackDropClickHandler} />
      );
    }
    return (
      <div className="landing_wrapper">
        <div>
          <LandingToolbar
            landingDrawerClickHandler={this.landingMenuClickHandler}
          />
          {landingSideDrawer}
          {landingBackDrop}
        </div>
        <div className="landing_background_style1">
          <p className="main_title" id="top">
            בייביסיטר <br></br>מיוחד במינו
          </p>
          <hr className="line_divider" />
          <p className="p">
            בייביסיטר מיוחד במינו בשיתוף<br></br> 'עדי בשבילכם' מציע חיבור בין
            הורים<br></br> לילדים מיוחדים לבייביסיטרים<br></br> פוטנציאליים
            מתחום החינוך המיוחד.
          </p>
          <img src={phone} className="iphone_logo_style" />
        </div>
        <div className="landing_background_style2">
          <p className="title" id="on_the_project">
            אז,
            <br></br> מי אנחנו?
          </p>
          <p className="p1">
            את הפרויקט "בייביסיטר מיוחד במינו" הקימה הגב' נעמי אבנר - אמא לילד
            עם פגיעה מוחית קשה, אשר ראתה את הצורך בבייביסיטר להורים לילדים
            מיוחדים, ורתמה סטודנטיות לחינוך מיוחד לפיתוח והפעלת הפרויקט.
          </p>
          <p className="p1">
            מטרת הפרויקט היא להרחיב את מאגר הבייביסיטרים וכך לאפשר למספר מירבי
            של הורים לילדים מיוחדים, רווחה ומרווח נפשי, והאפשרות להשקיע בעצמם
            בזמן שהם יודעים שילדיהם נמצאים בידיים טובות.
          </p>
          <p className="p1">
            "בייביסיטר מיוחד במינו" מהווה פלטפורמה ל"שידוך" בין בייביסיטר מתאים
            לבין ילדים עם צרכים מיוחדים.
          </p>
          <p className="p1">
            פרוייקט "בייביסיטר מיוחד במינו" למעשה מאפשר להורים לקחת קצת "אוויר
            לנשימה" בעת שילדיהם נשארים מספר שעות ביום, או בשבוע בידיהם הטובות של
            סטודנטים לחינוך מיוחד או בייביסיטרים בעלי הכשרות שונות, חינוכיות או
            רפואיות מקצועיות.
            <br></br>
            זו הינה הזדמנות מצוינת עבור הבייביסיטרים ללמוד עוד וליישם את שלמדו,
            ובאותה נשימה גם להרוויח כסף ולתרום מהשעות הפנויות שלהם, על מנת
            שההורים יוכלו לקחת מעט זמן לעניינם.
          </p>
          <div className="video_style">
            <ReactPlayer
              url="https://youtu.be/xcYeasNGOj4"
              width="100%"
              height="100%"
            />
          </div>
          <p className="title" id="aleh_for_you">
            עדי
            <br></br> בשבילכם
          </p>
          <p className="p2">
            "עדי בשבילכם" הנו מרכז ייחודי מבית רשת 'עדי' בישראל ובשיתוף משרד
            הרווחה, המספק שירותי מידע, תמיכה וליווי ללא תשלום עבור משפחות לילדים
            עם מוגבלויות מורכבות. במרכז פועלים מגוון שירותים - קו חם לייעוץ
            והכוונה, הורים מלווים הורים וכן קבוצות תמיכה המונחות על ידי אנשי
            מקצוע.
          </p>
          <p className="p2">
            שירותים אלה מספקים מענה לשאלות, התלבטויות ואתגרים בהם נתקלים הורים
            בצמתים שונים בחיי ילדם המיוחד; החל מרגע האבחנה, דרך מסגרות חינוך
            וטיפול לאורך השנים והמשך במיצוי זכויות. אנו שואפים לתת מענה לסימני
            השאלה וחוסר האונים שהינם - לעתים קרובות - חלק בלתי נפרד מהחיים
            כהורים לילדים עם מוגבלויות, בכל שלב וגיל.
          </p>
          <img src={people} className="people_logo_style" />
        </div>
        <div className="landing_background_style3">
          <p className="title" id="contact">
            יש לכם
            <br></br> שאלה?
            <br></br> דברו איתנו
          </p>
          <p className="p1">
            מעוניינים לקחת חלק בפרוייקט, אך עדיין מתלבטים ולא סגורים על כל
            הפרטים?
            <br></br>
            מוזמנים ליצור איתנו קשר באחת מהדרכים הבאות:
          </p>
        </div>
        <div className="contact">
          <Container className="contact_table">
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
                <img src={FacebookIcon} width="35" height="35" />
              </Col>
              <Col width="80%">"בייביסיטר מיוחד במינו"</Col>
            </Row>
            <Row style={{ marginBottom: 10 }}>
              <Col width="20%">
                <img src={PhoneInTalkIcon} width="35" height="35" />
              </Col>
              <Col width="80%"> 'עדי בשבילכם' 1-800-201-077</Col>
            </Row>
          </Container>
          <img src={contact_background} className="contact_logo_style" />
        </div>
        <a
          href="https://babysitterkoda-1a3df.firebaseapp.com/"
          className="button2"
        >
          להתחברות/הרשמה הורידו כעת
        </a>
      </div>
    );
  }
}

export default LandingPage;
