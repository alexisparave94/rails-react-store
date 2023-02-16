# frozen_string_literal: true

# Class for product model
class Product < ApplicationRecord
  validates :sku, presence: true
  validates :name, presence: true
  validates :price, numericality: { integer_only: true }
  validates :price, numericality: { greater_than_or_equal_to: 0 }
  validates :stock, numericality: { integer_only: true }
  validates :stock, numericality: { greater_than_or_equal_to: 0 }
end
