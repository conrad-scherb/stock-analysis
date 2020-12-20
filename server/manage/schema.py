from marshmallow import Schema, fields

class StockSchema(Schema):
    symbol = fields.Str(required=True)
