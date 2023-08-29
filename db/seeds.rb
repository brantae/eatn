# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.delete_all
# Flair.delete_all

puts "seeding..."

user1 = User.create(name: 'Anslie', email: 'anslie@gmail.com', username: 'anslieb', password: 'cookie', bio: 'just here to post my girl dinners')

flair1 = Flair.create(name: 'Girl Dinner')
flair2 = Flair.create(name: '5 Star Cuisine')
flair3 = Flair.create(name: 'Struggle Meal')
flair4 = Flair.create(name: 'Munchies')
flair5 = Flair.create(name: 'Home Chef')
flair6 = Flair.create(name: 'Heart Healthy')

puts "seeded!"