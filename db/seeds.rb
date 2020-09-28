# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: 'demo', password: 'demodemo', email: 'demo@demo.com')
Genre.create(title: 'Action', description: 'Shooting, fighting and more...')
TvSeries.create(title: 'Spartacus', description: 'The life of Spartacus, the gladiator who lead a rebellion against the Romans. From his time as an ally of the Romans, to his betrayal and becoming a gladiator, to the rebellion he leads and its ultimate outcome.', release_date: 'January 22, 2010', image_url: 'https://m.media-amazon.com/images/M/MV5BZTEwZTM3MzUtMzk3Yy00YWI4LWI1ZTktOTc1MmRjZWM5ZDhmXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg')
Movie.create!(title: 'Spartacus', description: 'The life of Spartacus, the gladiator who lead a rebellion against the Romans. From his time as an ally of the Romans, to his betrayal and becoming a gladiator, to the rebellion he leads and its ultimate outcome.', release_date: 'January 22, 2010', image_url: 'https://m.media-amazon.com/images/M/MV5BZTEwZTM3MzUtMzk3Yy00YWI4LWI1ZTktOTc1MmRjZWM5ZDhmXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg',video_url: 'https://youtu.be/eJiBouML3FQ')
Movie.create!(title: 'The Red Serpent', description: "Spartacus, a free man of Thrace, agrees to join the Romans to battle his tribe's enemies. A betrayal sends his life spinning out of control.", release_date: 'January 22, 2010',tv_series_id: 1, image_url: 'https://m.media-amazon.com/images/M/MV5BOTcwMjAyMDI0NF5BMl5BanBnXkFtZTcwNzQzNzMxMw@@._V1_UY268_CR110,0,182,268_AL_.jpg', video_url: 'https://youtu.be/eJiBouML3FQ')
