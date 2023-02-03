puts 'Begin seeds'
puts 'Seeding Products'

pro1 = Product.create(sku: 'SKU-1001', name: 'Product 1', description: 'This is a description', price: 1000, stock: 10)
pro2 = Product.create(sku: 'SKU-1002', name: 'Product 2', description: 'This is a description', price: 2000, stock: 20)
pro3 = Product.create(sku: 'SKU-1003', name: 'Product 3', description: 'This is a description', price: 5000, stock: 50)

puts 'End seeds'