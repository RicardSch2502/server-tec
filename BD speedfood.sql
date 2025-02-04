-- MySQL Script generated by MySQL Workbench
-- Mon Mar 11 20:40:26 2024
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema speedfood
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema speedfood
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `speedfood` DEFAULT CHARACTER SET utf8 ;
USE `speedfood` ;

-- -----------------------------------------------------
-- Table `speedfood`.`usuarios`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `speedfood`.`usuarios` ;

CREATE TABLE IF NOT EXISTS `speedfood`.`usuarios` (
  `idusuario` INT NOT NULL AUTO_INCREMENT,
  `usarname` VARCHAR(20) NOT NULL,
  `password` LONGTEXT NOT NULL,
  `correo` VARCHAR(45) NOT NULL,
  `tipodeusuario` ENUM("cliente", "vendedor") NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `createdAt` DATETIME NOT NULL,
  PRIMARY KEY (`idusuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `speedfood`.`clasificacion_tienda`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `speedfood`.`clasificacion_tienda` ;

CREATE TABLE IF NOT EXISTS `speedfood`.`clasificacion_tienda` (
  `idclasificacion_tienda` INT NOT NULL AUTO_INCREMENT,
  `nombre_clasificacion` VARCHAR(45) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updateAt` DATETIME NOT NULL,
  PRIMARY KEY (`idclasificacion_tienda`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `speedfood`.`tiendas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `speedfood`.`tiendas` ;

CREATE TABLE IF NOT EXISTS `speedfood`.`tiendas` (
  `idtiendas` INT NOT NULL AUTO_INCREMENT,
  `nombredelatienda` VARCHAR(30) NOT NULL,
  `tiempodepreparacion` DECIMAL(2,2) NOT NULL,
  `distancia` DECIMAL(2,2) NOT NULL,
  `dueno` INT NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `clasificacion_tienda` INT NULL,
  `imagen` TEXT NOT NULL,
  `coordenadas` JSON NULL,
  PRIMARY KEY (`idtiendas`),
  INDEX `fk_tiendas_usuarios_idx` (`dueno` ASC) VISIBLE,
  INDEX `fk_tiendas_clasificacion_tienda1_idx` (`clasificacion_tienda` ASC) VISIBLE,
  CONSTRAINT `fk_tiendas_usuarios`
    FOREIGN KEY (`dueno`)
    REFERENCES `speedfood`.`usuarios` (`idusuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tiendas_clasificacion_tienda1`
    FOREIGN KEY (`clasificacion_tienda`)
    REFERENCES `speedfood`.`clasificacion_tienda` (`idclasificacion_tienda`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `speedfood`.`menus`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `speedfood`.`menus` ;

CREATE TABLE IF NOT EXISTS `speedfood`.`menus` (
  `idmenus` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `createAt` DATETIME NOT NULL,
  `updateAt` DATETIME NOT NULL,
  PRIMARY KEY (`idmenus`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `speedfood`.`platillos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `speedfood`.`platillos` ;

CREATE TABLE IF NOT EXISTS `speedfood`.`platillos` (
  `idplatillos` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(20) NOT NULL,
  `costo` DECIMAL(2,2) NOT NULL,
  `tiendas_idtiendas` INT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `imagen` TEXT NOT NULL,
  `descripcion` TEXT NOT NULL,
  `idmenus` INT NOT NULL,
  PRIMARY KEY (`idplatillos`),
  INDEX `fk_platillos_tiendas1_idx` (`tiendas_idtiendas` ASC) VISIBLE,
  INDEX `fk_platillos_menus1_idx` (`idmenus` ASC) VISIBLE,
  CONSTRAINT `fk_platillos_tiendas1`
    FOREIGN KEY (`tiendas_idtiendas`)
    REFERENCES `speedfood`.`tiendas` (`idtiendas`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_platillos_menus1`
    FOREIGN KEY (`idmenus`)
    REFERENCES `speedfood`.`menus` (`idmenus`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `speedfood`.`etiquetas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `speedfood`.`etiquetas` ;

CREATE TABLE IF NOT EXISTS `speedfood`.`etiquetas` (
  `idetiquetas` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(20) NOT NULL,
  `platillos_idplatillos` INT NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `createdAt` DATETIME NOT NULL,
  PRIMARY KEY (`idetiquetas`),
  INDEX `fk_etiquetas_platillos1_idx` (`platillos_idplatillos` ASC) VISIBLE,
  CONSTRAINT `fk_etiquetas_platillos1`
    FOREIGN KEY (`platillos_idplatillos`)
    REFERENCES `speedfood`.`platillos` (`idplatillos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `speedfood`.`ingredientesadicionales`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `speedfood`.`ingredientesadicionales` ;

CREATE TABLE IF NOT EXISTS `speedfood`.`ingredientesadicionales` (
  `idingredientesadicionales` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(20) NOT NULL,
  `cantidad` INT NOT NULL,
  `platillos_idplatillos` INT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`idingredientesadicionales`),
  INDEX `fk_ingredientesadicionales_platillos1_idx` (`platillos_idplatillos` ASC) VISIBLE,
  CONSTRAINT `fk_ingredientesadicionales_platillos1`
    FOREIGN KEY (`platillos_idplatillos`)
    REFERENCES `speedfood`.`platillos` (`idplatillos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `speedfood`.`carrito`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `speedfood`.`carrito` ;

CREATE TABLE IF NOT EXISTS `speedfood`.`carrito` (
  `idcarrito` INT NOT NULL AUTO_INCREMENT,
  `usuarios_idusuario` INT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`idcarrito`, `usuarios_idusuario`),
  INDEX `fk_carrito_usuarios1_idx` (`usuarios_idusuario` ASC) VISIBLE,
  CONSTRAINT `fk_carrito_usuarios1`
    FOREIGN KEY (`usuarios_idusuario`)
    REFERENCES `speedfood`.`usuarios` (`idusuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `speedfood`.`orden`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `speedfood`.`orden` ;

CREATE TABLE IF NOT EXISTS `speedfood`.`orden` (
  `platillo` INT NOT NULL,
  `idorden` INT NOT NULL AUTO_INCREMENT,
  `ingredientesadicionales` INT NULL,
  `carrito_idcarrito` INT NOT NULL,
  `carrito_usuarios_idusuario` INT NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `cantidad` INT NOT NULL,
  `pagado` TINYINT NOT NULL DEFAULT 0,
  `preferencias` LONGTEXT NULL,
  PRIMARY KEY (`idorden`),
  INDEX `fk_orden_carrito1_idx` (`carrito_idcarrito` ASC, `carrito_usuarios_idusuario` ASC) VISIBLE,
  INDEX `fk_orden_ingredientesadicionales1_idx` (`ingredientesadicionales` ASC) VISIBLE,
  CONSTRAINT `fk_orden_carrito1`
    FOREIGN KEY (`carrito_idcarrito` , `carrito_usuarios_idusuario`)
    REFERENCES `speedfood`.`carrito` (`idcarrito` , `usuarios_idusuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orden_ingredientesadicionales1`
    FOREIGN KEY (`ingredientesadicionales`)
    REFERENCES `speedfood`.`ingredientesadicionales` (`idingredientesadicionales`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `speedfood`.`calificaciones`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `speedfood`.`calificaciones` ;

CREATE TABLE IF NOT EXISTS `speedfood`.`calificaciones` (
  `idcalificaciones` INT NOT NULL AUTO_INCREMENT,
  `calificacion` INT NOT NULL,
  `tiendas_idtiendas` INT NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `createdAt` DATETIME NOT NULL,
  PRIMARY KEY (`idcalificaciones`),
  INDEX `fk_calificaciones_tiendas1_idx` (`tiendas_idtiendas` ASC) VISIBLE,
  CONSTRAINT `fk_calificaciones_tiendas1`
    FOREIGN KEY (`tiendas_idtiendas`)
    REFERENCES `speedfood`.`tiendas` (`idtiendas`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
