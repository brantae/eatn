# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.delete_all
User.delete_all
Flair.delete_all


puts "seeding..."

user1 = User.create(name: 'Anslie B', email: 'anslie@gmail.com', username: 'anslieb', password: 'cookie', bio: 'just here to post my girl dinners')
user2 = User.create(name: 'Luisa P', email: 'lzp@gmail.com', username: 'lulu', password: 'cake', bio: 'plant-based baddie')
user3 = User.create(name: 'Meggan Q', email: 'mltq@gmail.com', username: 'nutmeg', password: 'brownie', bio: 'life hack: freeze pesto in ice cube trays')

flair1 = Flair.create(name: 'Girl Dinner 🧚')
flair2 = Flair.create(name: '5 Star Cuisine ⭐️')
flair3 = Flair.create(name: 'Struggle Meal 🥪')
flair4 = Flair.create(name: 'Munchies 🍁')
flair5 = Flair.create(name: 'Home Chef 👩‍🍳')
flair6 = Flair.create(name: 'Heart Healthy ❤️️')
flair7 = Flair.create(name: 'Meal Prep 🍴️')
flair7 = Flair.create(name: 'Plant Based 🌱')

post1 = Post.create(user_id: user1.id, caption: 'test caption')
post2 = Post.create(user_id: user2.id, caption: 'test caption')
post3 = Post.create(user_id: user3.id, caption: 'test caption')
post4 = Post.create(user_id: user1.id, caption: 'test caption')

post1.image.attach(io: File.open(Rails.root.join('db/images/girl-dinner.jpg')), filename: 'girl-dinner.jpg')
post2.image.attach(io: File.open(Rails.root.join('db/images/meal-prep.jpg')), filename: 'meal-prep.jpg')
post3.image.attach(io: File.open(Rails.root.join('db/images/munchies.jpg')), filename: 'munchies.jpg')
post4.image.attach(io: File.open(Rails.root.join('db/images/struggle-meal.jpg')), filename: 'struggle-meal.jpg')


puts "seeded!"