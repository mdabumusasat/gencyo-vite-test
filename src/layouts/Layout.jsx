import React, { useEffect, useState, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { throttle } from "../utils/throttle";
import { useDarkMode } from "../contexts/DarkModeContext";

// Import all footer components
import Footer from "../components/Footers/Footer";
// import Footer2 from "../components/Footers/Footer2";
// import Footer3 from "../components/Footers/Footer3";
// import Footer4 from "../components/Footers/Footer4";

// Import all header components
import Header from "../components/Headers/Header";
// import Header2 from "../components/Headers/Header2";
// import Header3 from "../components/Headers/Header3";

const Layout = ({ children, HeaderStyle, FooterStyle, styleMode }) => {
  const [searchToggle, setSearchToggled] = useState(false);
  const [scroll, setScroll] = useState(false);
  const { setDarkMode } = useDarkMode();

  // Sync styleMode prop with dark mode context
  useEffect(() => {
    if (styleMode === "Dark") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, [styleMode, setDarkMode]);

  const handleToggle = useCallback(() => {
    setSearchToggled((prev) => !prev);
  }, []);

  // Throttled scroll handler
  const handleScroll = useCallback(
    throttle(() => {
      const scrollCheck = window.scrollY > 100;
      setScroll(scrollCheck);
    }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const handleOpen = useCallback(() => {
    document.body.classList.add("mobile-menu-visible");
  }, []);

  const handleRemove = useCallback(() => {
    document.body.classList.remove("mobile-menu-visible");
  }, []);

  // Memoize header props to prevent unnecessary re-renders
  const headerProps = useMemo(
    () => ({
      handleOpen,
      handleRemove,
      searchToggle,
      handleToggle,
      scroll,
    }),
    [handleOpen, handleRemove, searchToggle, handleToggle, scroll]
  );

  // Memoize header selection
  const renderHeader = useCallback(() => {
    switch (HeaderStyle) {
      // case "two":
      //   return <Header2 {...headerProps} />;
      // case "three":
      //   return <Header3 {...headerProps} />;
      default:
        return <Header {...headerProps} />;
    }
  }, [HeaderStyle, headerProps]);

  // Memoize footer selection
  const renderFooter = useCallback(() => {
    switch (FooterStyle) {
      // case "two":
      //   return <Footer2 />;
      // case "three":
      //   return <Footer3 />;
      // case "four":
      //   return <Footer4 />;
      default:
        return <Footer />;
    }
  }, [FooterStyle]);

  return (
    <>
      {renderHeader()}
      {children}
      {renderFooter()}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  HeaderStyle: PropTypes.oneOf(["two", "three", "four", "five", "six"]),
  FooterStyle: PropTypes.oneOf(["two", "three", "four", "five"]),
  styleMode: PropTypes.oneOf(["Dark", "Light"]),
};

export default React.memo(Layout);
