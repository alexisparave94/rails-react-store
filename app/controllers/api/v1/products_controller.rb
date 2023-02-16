# frozen_string_literal: true

module Api
  module V1
    # Class to manage api product controller
    class ProductsController < ApiController
      before_action :set_product, only: %i[show destroy]

      def index
        @products = Product.all.order(:name)
        render json: @products
      end

      def show
        render json: @product
      end

      def create
        @product = Product.new(product_params)
        if @product.save
          render json: @product
        else
          render json: @product.errors
        end
      end

      def destroy
        @product.destroy
        render json: { message: 'Product deleted!' }
      end

      private

      def product_params
        params.permit(:sku, :name, :description, :price, :stock)
      end

      def set_product
        @product = Product.find(params[:id])
      end
    end
  end
end
