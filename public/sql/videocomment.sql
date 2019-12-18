/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 80013
Source Host           : localhost:3306
Source Database       : mydb_web

Target Server Type    : MYSQL
Target Server Version : 80013
File Encoding         : 65001

Date: 2019-12-19 01:07:45
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for videocomment
-- ----------------------------
DROP TABLE IF EXISTS `videocomment`;
CREATE TABLE `videocomment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `vid` int(11) DEFAULT NULL,
  `floor` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `comment_time` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `fatherfloor` varchar(255) DEFAULT NULL,
  `isshow` tinyint(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of videocomment
-- ----------------------------
INSERT INTO `videocomment` VALUES ('1', '1', '1', 'lu', 'good', '', '0', '0');
INSERT INTO `videocomment` VALUES ('2', '1', '2', 'chen', 'nice!', null, '0', '0');
INSERT INTO `videocomment` VALUES ('3', '1', '1', 'chen', 'nice!nice!', null, '1', null);
INSERT INTO `videocomment` VALUES ('4', '1', '2', 'lu', 'jiuzhe?', null, '1', null);
