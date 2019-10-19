CREATE TABLE `zstockprod` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `productid` text COLLATE latin1_general_ci NOT NULL,
  `name` text COLLATE latin1_general_ci NOT NULL,
  `category` text COLLATE latin1_general_ci NOT NULL,
  `available` text COLLATE latin1_general_ci NOT NULL,
  `unitprice` text COLLATE latin1_general_ci NOT NULL,
  `datechecked` text COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;