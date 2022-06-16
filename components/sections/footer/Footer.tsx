import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p>
        created by{" "}
        <a href="https://github.com/bloomkicks">
          <strong>bloomkicks</strong>
        </a>
        - devChallenges.io
      </p>
    </footer>
  );
};

export default Footer;
