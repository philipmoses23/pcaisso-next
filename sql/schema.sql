-- users table
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(50) DEFAULT NULL,
  `user_name` varchar(128) DEFAULT NULL,
  `image_url` varchar(150) DEFAULT NULL,
  `created_time` timestamp NULL DEFAULT NULL,
  `last_session_time` timestamp NULL DEFAULT NULL,
  `role` enum('user','admin') DEFAULT 'user',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- results table
CREATE TABLE `results` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uuid` varchar(36) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `type` enum('2D','SVG','3D','D3') DEFAULT NULL,
  `description` text DEFAULT NULL,
  `prompt` text DEFAULT NULL,
  `model` varchar(128) DEFAULT NULL,
  `provider` varchar(45) DEFAULT NULL,
  `output` text DEFAULT NULL,
  `thumbnail_url` varchar(1024) DEFAULT NULL,
  `created_time` timestamp NULL DEFAULT NULL,
  `time_taken` double DEFAULT NULL,
  `prompt_tokens` int(11) DEFAULT NULL,
  `completion_tokens` int(11) DEFAULT NULL,
  `liked` tinyint(1) DEFAULT NULL,
  `liked_time` timestamp NULL DEFAULT NULL,
  `status` enum('ACTIVE','DELETED') DEFAULT NULL,
  `input_cost` double(2,2) DEFAULT NULL,
  `output_cost` double(2,2) DEFAULT NULL,
  `total_cost` double(2,2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_userId` (`user_id`),
  CONSTRAINT `fk_userId` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=574 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
