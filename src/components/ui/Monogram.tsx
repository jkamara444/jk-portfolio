import styles from "./Monogram.module.css";

/*
 * The monogram's artwork: a thin script J and K with a four-point sparkle, shaded like a little
 * soft gel. It is drawn once per page, in the hidden sprite below, and every <Monogram /> points
 * at it with <use>. The letters are the Pinyon Script outlines, so the mark needs no font.
 *
 * Colours come from CSS variables, set per theme in tokens.css / theme.css:
 *   --mk0 ... --mk4        the five stops of the gradient
 *   --mkShadow, --mkShadowA  the soft shadow under the letters (colour, opacity)
 * The gradient is resolved where it is defined, so the sprite has to sit inside the `.jk` page root
 * (PageShell does that), which is also what lets a page lock itself to the dark palette.
 */

const J_PATH =
  "M-431 741Q-480 741 -501.5 710.5Q-523 680 -523 649Q-523 564 -451.5 466.0Q-380 368 -252.0 271.5Q-124 175 48.0 92.0Q220 9 421 -46Q477 -119 532.0 -195.0Q587 -271 642 -347Q581 -380 541.0 -440.0Q501 -500 501 -581Q501 -709 561.0 -830.0Q621 -951 727.5 -1054.5Q834 -1158 975.0 -1236.0Q1116 -1314 1278.5 -1357.5Q1441 -1401 1612 -1401Q1662 -1401 1709.0 -1394.0Q1756 -1387 1796 -1387Q1821 -1387 1846.0 -1390.5Q1871 -1394 1898 -1394Q1936 -1394 1936 -1381Q1936 -1365 1903.5 -1362.0Q1871 -1359 1844 -1359Q1826 -1359 1809.5 -1359.5Q1793 -1360 1779 -1360Q1607 -1318 1413.5 -1139.0Q1220 -960 1022 -658Q960 -572 901.5 -493.0Q843 -414 788 -340Q871 -340 963.5 -384.0Q1056 -428 1143.5 -502.0Q1231 -576 1302.0 -667.5Q1373 -759 1415.0 -854.5Q1457 -950 1457 -1035Q1457 -1066 1468 -1066Q1476 -1066 1477.5 -1052.0Q1479 -1038 1479 -1020Q1479 -922 1439.0 -821.5Q1399 -721 1329.0 -630.0Q1259 -539 1169.0 -467.5Q1079 -396 978.5 -354.5Q878 -313 777 -313H767Q723 -254 680.0 -198.5Q637 -143 596 -92Q669 -112 716.0 -124.0Q763 -136 801.0 -147.0Q839 -158 881.5 -173.0Q924 -188 988 -213Q1009 -222 1017.0 -226.5Q1025 -231 1029 -231Q1029 -231 1033.5 -229.0Q1038 -227 1038 -223Q1037 -217 1030.5 -210.5Q1024 -204 1004 -196Q958 -177 921.0 -162.0Q884 -147 839.5 -131.5Q795 -116 729.5 -96.5Q664 -77 562 -49Q379 178 232.5 330.5Q86 483 -32.0 573.0Q-150 663 -247.5 702.0Q-345 741 -431 741ZM660 -373 781 -545Q968 -811 1146.0 -984.5Q1324 -1158 1474.5 -1251.0Q1625 -1344 1729 -1367Q1703 -1371 1673.5 -1373.0Q1644 -1375 1624 -1375Q1522 -1375 1403.5 -1339.5Q1285 -1304 1165.0 -1242.0Q1045 -1180 936.0 -1099.5Q827 -1019 741.5 -928.0Q656 -837 606.0 -744.0Q556 -651 556 -565Q556 -496 585.0 -448.0Q614 -400 660 -373ZM-428 716Q-322 716 -191.0 620.0Q-60 524 87.0 361.0Q234 198 387 -1Q278 37 157.0 99.5Q36 162 -79.0 237.5Q-194 313 -287.0 391.0Q-380 469 -435.5 538.0Q-491 607 -491 656Q-491 681 -473.5 698.5Q-456 716 -428 716Z";
const K_PATH =
  "M199 2Q105 2 52.5 -37.5Q0 -77 0 -132Q0 -178 31.0 -196.5Q62 -215 93 -215Q109 -215 126.0 -205.0Q143 -195 143 -170Q143 -151 126.0 -136.0Q109 -121 86 -121Q73 -121 61.0 -122.5Q49 -124 39 -130V-124Q39 -81 82.0 -52.5Q125 -24 198 -24Q274 -24 371.0 -73.0Q468 -122 590.5 -239.0Q713 -356 863 -560Q946 -673 1090.0 -816.0Q1234 -959 1403 -1115Q1309 -1052 1226.0 -1017.5Q1143 -983 1063 -983Q1019 -983 991.0 -1003.5Q963 -1024 963 -1064Q963 -1160 1112 -1267Q1159 -1300 1159 -1321Q1159 -1354 1129.5 -1368.5Q1100 -1383 1050 -1383Q956 -1383 874.5 -1344.0Q793 -1305 729.5 -1243.5Q666 -1182 625.5 -1114.0Q585 -1046 572 -988Q564 -962 558 -962Q547 -962 547 -980Q547 -990 549 -996Q560 -1039 596.5 -1108.0Q633 -1177 695.0 -1246.5Q757 -1316 847.5 -1363.5Q938 -1411 1057 -1411Q1126 -1411 1171.0 -1382.5Q1216 -1354 1216 -1311Q1216 -1260 1182.0 -1204.5Q1148 -1149 1068 -1099Q1040 -1081 1024.0 -1070.5Q1008 -1060 1008 -1043Q1008 -1030 1023.5 -1020.5Q1039 -1011 1063 -1011Q1173 -1011 1294.0 -1075.5Q1415 -1140 1551 -1255Q1648 -1333 1709.0 -1374.0Q1770 -1415 1804.0 -1430.5Q1838 -1446 1853 -1446Q1867 -1446 1867 -1438Q1867 -1429 1857 -1426Q1825 -1417 1769.0 -1382.0Q1713 -1347 1625.0 -1264.5Q1537 -1182 1409.5 -1034.0Q1282 -886 1107 -651Q848 -307 611.0 -152.5Q374 2 199 2ZM1217 14Q1081 14 1081 -90Q1081 -132 1103.5 -190.5Q1126 -249 1190.0 -334.0Q1254 -419 1377 -540Q1415 -577 1431.0 -619.5Q1447 -662 1447 -685Q1447 -695 1444 -704Q1384 -685 1331 -684Q1282 -682 1251.5 -699.0Q1221 -716 1221 -735Q1221 -752 1247.0 -766.5Q1273 -781 1323 -782Q1364 -783 1399.0 -773.5Q1434 -764 1457 -741Q1517 -771 1582.5 -831.0Q1648 -891 1730 -983Q1866 -1132 2000.5 -1226.5Q2135 -1321 2249.5 -1366.5Q2364 -1412 2438 -1412Q2535 -1412 2576.0 -1374.5Q2617 -1337 2607 -1281Q2599 -1235 2569.5 -1208.0Q2540 -1181 2509 -1181Q2479 -1181 2467.0 -1199.5Q2455 -1218 2459 -1239Q2462 -1259 2482.0 -1275.5Q2502 -1292 2527 -1292Q2555 -1292 2571 -1277L2575 -1295Q2581 -1321 2552.0 -1355.0Q2523 -1389 2438 -1389Q2394 -1389 2341.5 -1364.5Q2289 -1340 2211.0 -1278.0Q2133 -1216 2011 -1102Q1867 -960 1733.0 -859.5Q1599 -759 1477 -715Q1495 -681 1495 -638Q1495 -582 1475.5 -518.0Q1456 -454 1398.5 -374.5Q1341 -295 1227 -193Q1169 -141 1151.5 -113.0Q1134 -85 1134 -67Q1134 -41 1154.5 -27.5Q1175 -14 1230 -14Q1277 -14 1342.0 -47.5Q1407 -81 1474.0 -143.5Q1541 -206 1596.0 -294.0Q1651 -382 1678 -490Q1686 -521 1692 -521Q1704 -521 1704 -483Q1704 -426 1673.0 -359.0Q1642 -292 1589.5 -226.0Q1537 -160 1473.0 -106.0Q1409 -52 1342.5 -19.0Q1276 14 1217 14ZM1345 -712Q1389 -714 1428 -729Q1410 -746 1381.5 -754.0Q1353 -762 1325 -760Q1303 -759 1286.5 -750.5Q1270 -742 1270 -736Q1270 -727 1287.5 -719.0Q1305 -711 1345 -712Z";
const STAR_BIG =
  "M0 -62 C4.34 -4.34 4.34 -4.34 62 0 C4.34 4.34 4.34 4.34 0 62 C-4.34 4.34 -4.34 4.34 -62 0 C-4.34 -4.34 -4.34 -4.34 0 -62Z";
const STAR_SMALL =
  "M0 -26 C1.82 -1.82 1.82 -1.82 26 0 C1.82 1.82 1.82 1.82 0 26 C-1.82 1.82 -1.82 1.82 -26 0 C-1.82 -1.82 -1.82 -1.82 0 -26Z";

/** Crops the artwork's 1000 x 700 drawing space to the mark, with room for its shadow. */
export const MONOGRAM_VIEW_BOX = "145 115 790 450";

/** The hidden sprite. Render it once per page, inside the `.jk` root. */
export function MonogramDefs() {
  return (
    <svg className={styles.sprite} width="0" height="0" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="jk-mk-g" x1="0" y1="0.41" x2="1" y2="0.59">
          <stop offset="0" style={{ stopColor: "var(--mk0)" }} />
          <stop offset="0.26" style={{ stopColor: "var(--mk1)" }} />
          <stop offset="0.5" style={{ stopColor: "var(--mk2)" }} />
          <stop offset="0.68" style={{ stopColor: "var(--mk3)" }} />
          <stop offset="1" style={{ stopColor: "var(--mk4)" }} />
        </linearGradient>

        {/* The gel: a blurred copy of the shape is lit from the upper left, and that light is
            laid over the letters as a soft body shade plus a glint. */}
        <filter
          id="jk-mk-gel"
          x="-8%"
          y="-8%"
          width="116%"
          height="116%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur in="SourceAlpha" stdDeviation="4.2" result="b" />
          <feSpecularLighting
            in="b"
            surfaceScale="5"
            specularConstant="1"
            specularExponent="26"
            lightingColor="#fff"
            result="sp"
          >
            <feDistantLight azimuth="225" elevation="48" />
          </feSpecularLighting>
          <feComposite in="sp" in2="SourceAlpha" operator="in" result="sp2" />
          <feDiffuseLighting
            in="b"
            surfaceScale="5"
            diffuseConstant="1.05"
            lightingColor="#fff"
            result="df"
          >
            <feDistantLight azimuth="225" elevation="58" />
          </feDiffuseLighting>
          <feComposite
            in="SourceGraphic"
            in2="df"
            operator="arithmetic"
            k1="1.06"
            k2="0"
            k3="0"
            k4="0"
            result="sh"
          />
          <feComposite
            in="sh"
            in2="sp2"
            operator="arithmetic"
            k1="0"
            k2="1"
            k3="1"
            k4="0"
            result="lit"
          />
          <feComposite in="lit" in2="SourceAlpha" operator="in" />
        </filter>
        <filter id="jk-mk-sh" x="-10%" y="-10%" width="120%" height="130%">
          <feGaussianBlur stdDeviation="6.72" />
        </filter>

        <g id="jk-mk-j" transform="translate(241.46 414.91) scale(0.31901)">
          <path d={J_PATH} transform="translate(0 0) scale(0.48828)" />
          <path d={K_PATH} transform="translate(476.95 0) scale(0.48828)" />
        </g>
        <g id="jk-mk-s">
          <path strokeWidth="4.55" d={STAR_BIG} transform="translate(830 190)" />
          <path strokeWidth="1.95" d={STAR_SMALL} transform="translate(895 290)" />
        </g>

        <g id="jk-mk-art">
          <g
            style={{ opacity: "var(--mkShadowA)" }}
            filter="url(#jk-mk-sh)"
            transform="translate(5 12)"
            fill="var(--mkShadow)"
            stroke="var(--mkShadow)"
            strokeLinejoin="round"
          >
            <use href="#jk-mk-j" strokeWidth="20.38" />
            <use href="#jk-mk-s" />
          </g>
          <g
            filter="url(#jk-mk-gel)"
            fill="url(#jk-mk-g)"
            stroke="url(#jk-mk-g)"
            strokeLinejoin="round"
          >
            <use href="#jk-mk-j" strokeWidth="20.38" />
            <use href="#jk-mk-s" />
          </g>
        </g>
      </defs>
    </svg>
  );
}

/** The JK mark used in the header and footer. Sized by the font-size of whatever holds it. */
export function Monogram() {
  return (
    <svg
      className={styles.monogram}
      viewBox={MONOGRAM_VIEW_BOX}
      aria-hidden="true"
      focusable="false"
    >
      <use href="#jk-mk-art" />
    </svg>
  );
}
