/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Seconds = ({ seconds }) => {
  return (
    <div className="seconds">
      <div className={`div seconds-${seconds}`}>
        {(seconds === "default" ||
          seconds === "second-48" ||
          seconds === "second-49" ||
          seconds === "second-50" ||
          seconds === "second-51" ||
          seconds === "second-52" ||
          seconds === "second-53" ||
          seconds === "second-54" ||
          seconds === "second-55" ||
          seconds === "second-56" ||
          seconds === "second-57") && (
          <>
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
          </>
        )}

        {(seconds === "second-01" ||
          seconds === "second-02" ||
          seconds === "second-03" ||
          seconds === "second-04" ||
          seconds === "second-05" ||
          seconds === "second-06" ||
          seconds === "second-07" ||
          seconds === "second-08" ||
          seconds === "second-09" ||
          seconds === "second-10" ||
          seconds === "second-11" ||
          seconds === "second-12" ||
          seconds === "second-13" ||
          seconds === "second-14" ||
          seconds === "second-15" ||
          seconds === "second-16" ||
          seconds === "second-17" ||
          seconds === "second-18" ||
          seconds === "second-19" ||
          seconds === "second-20" ||
          seconds === "second-21" ||
          seconds === "second-22" ||
          seconds === "second-23" ||
          seconds === "second-24" ||
          seconds === "second-25" ||
          seconds === "second-26" ||
          seconds === "second-27" ||
          seconds === "second-28" ||
          seconds === "second-29" ||
          seconds === "second-30" ||
          seconds === "second-31" ||
          seconds === "second-32" ||
          seconds === "second-33" ||
          seconds === "second-34" ||
          seconds === "second-35" ||
          seconds === "second-36" ||
          seconds === "second-37" ||
          seconds === "second-38" ||
          seconds === "second-39" ||
          seconds === "second-40" ||
          seconds === "second-41" ||
          seconds === "second-42" ||
          seconds === "second-43" ||
          seconds === "second-44" ||
          seconds === "second-45" ||
          seconds === "second-46" ||
          seconds === "second-47" ||
          seconds === "seconds-59") && (
          <>
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
            45
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
          </>
        )}
      </div>
    </div>
  );
};

Seconds.propTypes = {
  seconds: PropTypes.oneOf([
    "second-01",
    "second-29",
    "second-19",
    "second-17",
    "second-10",
    "second-43",
    "second-26",
    "second-50",
    "second-11",
    "second-37",
    "second-15",
    "second-21",
    "second-03",
    "default",
    "second-55",
    "second-47",
    "second-39",
    "second-30",
    "second-09",
    "second-04",
    "second-02",
    "second-13",
    "second-40",
    "second-53",
    "second-18",
    "second-51",
    "second-23",
    "second-22",
    "second-44",
    "second-52",
    "second-08",
    "second-38",
    "second-06",
    "second-07",
    "second-48",
    "second-25",
    "second-28",
    "second-57",
    "second-20",
    "second-49",
    "second-24",
    "second-27",
    "second-32",
    "second-33",
    "second-42",
    "second-45",
    "second-36",
    "second-54",
    "second-31",
    "seconds-59",
    "second-14",
    "second-56",
    "second-46",
    "second-35",
    "second-05",
    "second-34",
    "second-16",
    "second-12",
    "second-41",
  ]),
};
