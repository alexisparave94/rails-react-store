module Api
  module V1
    class ProductsController < ApiController
      def index
        @products = Product.all.order(:name)
        render json: @products
      end
    end
  end
end
