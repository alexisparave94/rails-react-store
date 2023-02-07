module Api
  module V1
    class ProductsController < ApiController
      def index
        @products = Product.all.order(:name)
        render json: @products
      end

      def show
        @product = Product.find(params[:id])
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

      private

      def product_params
        params.permit(:sku, :name, :description, :price, :stock)
      end
    end
  end
end
