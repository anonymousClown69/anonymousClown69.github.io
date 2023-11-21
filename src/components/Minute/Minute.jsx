/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Minute = ({ minutes }) => {
  return (
    <div className="minute">
      <div className={`element ${minutes}`}>
        59
        <br />
        58
        <br />
        57
        <br />
        56
        <br />
        55
        <br />
        54
        <br />
        53
        <br />
        52
        <br />
        51
        <br />
        50
        <br />
        49
        <br />
        48
        <br />
        47
        <br />
        46
        <br />
        55
        <br />
        44
        <br />
        43
        <br />
        42
        <br />
        41
        <br />
        40
        <br />
        39
        <br />
        38
        <br />
        37
        <br />
        36
        <br />
        35
        <br />
        34
        <br />
        33
        <br />
        32
        <br />
        31
        <br />
        30
        <br />
        29
        <br />
        28
        <br />
        27
        <br />
        26
        <br />
        25
        <br />
        24
        <br />
        23
        <br />
        22
        <br />
        21
        <br />
        20
        <br />
        19
        <br />
        18
        <br />
        17
        <br />
        16
        <br />
        15
        <br />
        14
        <br />
        13
        <br />
        12
        <br />
        11
        <br />
        10
        <br />9<br />8<br />7<br />6<br />5<br />4<br />3<br />2<br />1
      </div>
    </div>
  );
};

Minute.propTypes = {
  minutes: PropTypes.oneOf([
    "minute-08",
    "minute-01",
    "minute-03",
    "default",
    "minute-05",
    "minute-07",
    "minute-06",
    "minute-04",
    "minute-02",
  ]),
};
