/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 80013
Source Host           : localhost:3306
Source Database       : mydb_web

Target Server Type    : MYSQL
Target Server Version : 80013
File Encoding         : 65001

Date: 2019-12-15 16:52:41
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for videomsg
-- ----------------------------
DROP TABLE IF EXISTS `videomsg`;
CREATE TABLE `videomsg` (
  `id` int(11) NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `vid` varchar(255) DEFAULT NULL,
  `area` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of videomsg
-- ----------------------------
INSERT INTO `videomsg` VALUES ('1', '【猛男版】新 宝 岛', '1', '舞蹈', '宅舞');
INSERT INTO `videomsg` VALUES ('2', '【RADWIMPS】《天气之子》片中曲『グランドエスケープ』完整版 MV【中字】', '2', '音乐', 'MV');
