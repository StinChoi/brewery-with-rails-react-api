# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Beer.create(name: "Relentless, Green Flash Saturhaze Hazy", abv:4.2, style: "Session Hazy IPA" )
Beer.create(name: "Mother Earth, Cali Creamin", abv:5, style:"Vanilla Cream Ale" )
Beer.create(name: "Belching Beaver, Peanut Butter Stout", abv:5.4, style:"Stout")
Beer.create(name: "Green Flash, West Coast IPA", abv:7, style:"IPA")
Beer.create(name: "Relentless, The Cynic Golden Blackberry, Rasberry Sour", abv:6.1, style:"Sour")
puts "seeded beer size: #{Beer.all.size}"