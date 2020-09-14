"""Models for Cupcake app."""

from flask import SQLAlchemy

db = SQLAlchemy()

class Cupcake(db.Model):
    """Cupcakes"""

    __tablename__="cupcakes"
