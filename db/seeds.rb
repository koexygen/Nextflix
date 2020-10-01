# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'


User.create(username: 'demo', password: 'demodemo', email: 'demo@demo.com')
Genre.create(title: 'Action', description: 'Shooting, fighting and more...')
Watchlist.create(title: 'demo watchlist', description: 'Demo description for watchlist', user_id: 1)
spartacustv = TvSeries.create(title: 'Spartacus', description: 'The life of Spartacus, the gladiator who lead a rebellion against the Romans. From his time as an ally of the Romans, to his betrayal and becoming a gladiator, to the rebellion he leads and its ultimate outcome.', release_date: 'January 22, 2010', image_url: 'https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfIfmWse-6EgKBTXG4a2EO-_zMtUpWQOqN_e1-P2p-xzzT8eLmyWXEGmhva31xgcSBTxHQog9uJ3bMh8kQLUgtkd64Y.webp?r=641')
spartacus = Movie.create(title: 'Spartacus', description: 'The life of Spartacus, the gladiator who lead a rebellion against the Romans. From his time as an ally of the Romans, to his betrayal and becoming a gladiator, to the rebellion he leads and its ultimate outcome.', release_date: 'January 22, 2010', image_url: 'https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfIfmWse-6EgKBTXG4a2EO-_zMtUpWQOqN_e1-P2p-xzzT8eLmyWXEGmhva31xgcSBTxHQog9uJ3bMh8kQLUgtkd64Y.webp?r=641',video_url: 'https://nextflix-g-dev.s3.eu-central-1.amazonaws.com/Spartacus%20Blood%20And%20Sand%20Trailer%20%5BHD%5D.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaDGV1LWNlbnRyYWwtMSJIMEYCIQDKcb89SLIuCo%2FKVU7tAV%2Fa%2B%2Ffgj%2FtDheV%2FeikWKg7tvAIhALP4WZEuVntXRpF5kuCvZdb9HcLydPLjXauk%2F5%2F0XtrSKsQCCHoQARoMNTQ1NDE3MDE0NzQ4Igz%2FUKnLD6r9y1T7fzkqoQLP4zpVeolTM%2BLV%2ByS09wUD0tMMYF%2B41ZuKFlazIVBkddO4Z89V1XkI0noc4YnCpzdReqXcHSGjQBZU3megpslKBlV9FNWCGlOCfSQD0GDCSpOf7Ed8sR3rQzQXskpO5V6VnRzbgbP7EVUVptjwkeFRW2d9Z7cLL2rIx8uIq0Yxn%2FpxcGA0hEY4zZUf3q600ElyYBVWP1h1wlpALR4%2BCfW%2BbcDtct65hZN6ayBzeGDxBJx5TEsa0AHwiq9UcmM4Tqz1GpaLE556LOAb%2BEIq7l8gREvP0P6%2BaDTzYDw391IgbChtCTUAdH5s%2F2URi14nzrV8qNc6PK9XASIM1f4E2Xt4pv7ozqRDsJ%2BvWcH5THcPkpQcH480P55drrMwsG2j2sWPMOaO2PsFOq8Crp9admoj7MRXFHXzRhn5tTZP5ouMZWjdXMCAi%2FR1EuhZy4IM3irUgqOeGlobKdUvyHhC0Cr4%2B6w5njUQSnSCnqnDdmrtxDd6TUMNKMsWJsf%2BVH%2FEZLqjPwMyV0saCopMd9AkgM2gWnNOyV3A%2B4s8E7SLovDedw%2FnChAf2lB5bh4aUMFeAleq08Cktn1vfFJbteB1lv2ibIN5Gu1GHD9%2FW1h1Mqg9yXs3ZtzsqgsnWdz%2FGrG%2BR6FZ%2BixUYwQGy77kWICLRUxK%2BTtPohagWZKGTNh%2Boy2uDGFwg7f03hM%2FGYyRTfKpzyTxz%2FnVtIuZ89of1q1%2BABXqo1t3qsRLZtjE0nvOpMW4d2MGw1EScu5fpFusuv0OiVvR0nPE2AxyVbeEM7N0Zm9w1MacNVKi6wvQ&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20201001T164514Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAX57LDFXOO5GYSYN4%2F20201001%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=917d8bd31c7cd2aef922f6c2b4a5f6563763b135d1499aa065fd7bbab907b588')
spartacus_e1 = Movie.create(title: 'The Red Serpent', description: "Spartacus, a free man of Thrace, agrees to join the Romans to battle his tribe's enemies. A betrayal sends his life spinning out of control.", release_date: 'January 22, 2010',tv_series_id: 1, image_url: 'https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfIfmWse-6EgKBTXG4a2EO-_zMtUpWQOqN_e1-P2p-xzzT8eLmyWXEGmhva31xgcSBTxHQog9uJ3bMh8kQLUgtkd64Y.webp?r=641', video_url: 'https://nextflix-g-dev.s3.eu-central-1.amazonaws.com/Spartacus%20Blood%20And%20Sand%20Trailer%20%5BHD%5D.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaDGV1LWNlbnRyYWwtMSJIMEYCIQDKcb89SLIuCo%2FKVU7tAV%2Fa%2B%2Ffgj%2FtDheV%2FeikWKg7tvAIhALP4WZEuVntXRpF5kuCvZdb9HcLydPLjXauk%2F5%2F0XtrSKsQCCHoQARoMNTQ1NDE3MDE0NzQ4Igz%2FUKnLD6r9y1T7fzkqoQLP4zpVeolTM%2BLV%2ByS09wUD0tMMYF%2B41ZuKFlazIVBkddO4Z89V1XkI0noc4YnCpzdReqXcHSGjQBZU3megpslKBlV9FNWCGlOCfSQD0GDCSpOf7Ed8sR3rQzQXskpO5V6VnRzbgbP7EVUVptjwkeFRW2d9Z7cLL2rIx8uIq0Yxn%2FpxcGA0hEY4zZUf3q600ElyYBVWP1h1wlpALR4%2BCfW%2BbcDtct65hZN6ayBzeGDxBJx5TEsa0AHwiq9UcmM4Tqz1GpaLE556LOAb%2BEIq7l8gREvP0P6%2BaDTzYDw391IgbChtCTUAdH5s%2F2URi14nzrV8qNc6PK9XASIM1f4E2Xt4pv7ozqRDsJ%2BvWcH5THcPkpQcH480P55drrMwsG2j2sWPMOaO2PsFOq8Crp9admoj7MRXFHXzRhn5tTZP5ouMZWjdXMCAi%2FR1EuhZy4IM3irUgqOeGlobKdUvyHhC0Cr4%2B6w5njUQSnSCnqnDdmrtxDd6TUMNKMsWJsf%2BVH%2FEZLqjPwMyV0saCopMd9AkgM2gWnNOyV3A%2B4s8E7SLovDedw%2FnChAf2lB5bh4aUMFeAleq08Cktn1vfFJbteB1lv2ibIN5Gu1GHD9%2FW1h1Mqg9yXs3ZtzsqgsnWdz%2FGrG%2BR6FZ%2BixUYwQGy77kWICLRUxK%2BTtPohagWZKGTNh%2Boy2uDGFwg7f03hM%2FGYyRTfKpzyTxz%2FnVtIuZ89of1q1%2BABXqo1t3qsRLZtjE0nvOpMW4d2MGw1EScu5fpFusuv0OiVvR0nPE2AxyVbeEM7N0Zm9w1MacNVKi6wvQ&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20201001T164514Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAX57LDFXOO5GYSYN4%2F20201001%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=917d8bd31c7cd2aef922f6c2b4a5f6563763b135d1499aa065fd7bbab907b588')
stranger_things = Movie.create(title: 'Stranger Things', description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.", release_date: '2019', image_url: 'https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbAJGyjtN3VkGy6a2beSc8L2CyeHN30fMbyeViVew8cVGmbJMPQojMt6zcrNjnKrTaziFlhTeQNcoDuwWRnMpBy0DvnIiQoLG07zdmUOeXA0jpC-fe8VK3QJBRGe.jpg?r=b4e', video_url: 'https://youtu.be/eJiBouML3FQ')
money_heist = Movie.create(title: 'Money Heist', description: "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.", release_date: '2019', image_url: 'https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYz1MPh7NPoE55666ZwBjo9vH2dtbGXo908Vy_ZXtwNGGx0OdJpTL0amDiWGwOvs9KNkr9cHHATKsuAvG8r3y-lNfM5Gq5XmFweQLfX2HK_bwL8zWyaCXf7t7KwJ.jpg?r=50f', video_url: 'https://youtu.be/eJiBouML3FQ')
old_guard = Movie.create(title: 'Old Guard', description: "Ancient warriors, living in the shadows, fighting for what's right. But immortality can grow old — and nothing lasts forever.", release_date: '2019', image_url: 'https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABccdNJhrfpWzHB1PMzEg27DVeqg7ub3q07HxWfA5rVWsONXmY9tcp3BA2vwwVjS0XMiWR3h_GzzDoD4ThAATMbU4f5fQekIfWLdgjXztnkeMaDIiRh1g0zZwEdwm.jpg?r=c52', video_url: 'https://youtu.be/eJiBouML3FQ')
vikings = Movie.create(title: 'Vikings', description: "King Bjorn reluctantly considers a plea from King Harald for military assistance. Ivar is shocked as Prince Oleg of Kiev makes a violent power grab.", release_date: '2019', image_url: 'https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYVZbqz_uitE0A1OmhKLo3WWuKlxVcPkV9Iaa2jtC-3OBvD1S8h27ov27K2A5e1Gvpt8TYTMPIroq_UtCn28Ho8rIxg.webp?r=eab', video_url: 'https://youtu.be/eJiBouML3FQ')
the_witcher = Movie.create(title: 'The Witcher', description: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.", release_date: '2019', image_url: 'https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABelflbF7hLllQWMP9vusyHxWklYqi-_xMHvad3rT2_mVkUWZoD_C1iDbNUCeeZ92dfng-rikd9HvJIUvZZ3oo32fhhKlwEdPt1CyR3cT7occykhrEeKHaHJglR78.jpg?r=382', video_url: 'https://youtu.be/eJiBouML3FQ')
peaky_blinders = Movie.create(title: 'Peaky Blinders', description: "A notorious gang in 1919 Birmingham, England, is led by the fierce Tommy Shelby, a crime boss set on moving up in the world no matter the cost.", release_date: '2019', image_url: 'https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZvbw253rjdf-lDxQgElGKjKa38YquVLfdyRu6L3XZnaunq4Inc5LXyH_KBfD6d7esLp09zMYWv_LvCFygghMWzB_LFiIxGr2tlSW5vMo97FUcZTe9BXBs7s_P-S.jpg?r=c25', video_url: 'https://youtu.be/eJiBouML3FQ')
lucifer = Movie.create(title: 'Lucifer', description: "Bored with being the Lord of Hell, the devil relocates to Los Angeles, where he opens a nightclub and forms a connection with a homicide detective.", release_date: '2019', image_url: 'https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABY4Xa-N3i4bkyZHHhx1flMX0yYdA1d9mLvD1i_TSdpaBh70ecOdls308UzojG3eNirEo4sXXLzcaX9Dweb8KaufQ-_xta9qyWD3pmE30dSlDO4hzdBacOjp0G9i7.jpg?r=62e', video_url: 'https://youtu.be/eJiBouML3FQ')
Like.create(user_id: 1, movie_id: 1, watchlist_id: 1)
Like.create(user_id: 1, movie_id: 2, watchlist_id: 1)
Like.create(user_id: 1, movie_id: 3, watchlist_id: 1)
Like.create(user_id: 1, movie_id: 4, watchlist_id: 1)
Like.create(user_id: 1, movie_id: 5, watchlist_id: 1)
Like.create(user_id: 1, movie_id: 6, watchlist_id: 1)
Like.create(user_id: 1, movie_id: 7, watchlist_id: 1)
Like.create(user_id: 1, movie_id: 8, watchlist_id: 1)
spartacustv.trailer.attach(io: URI.open("https://nextflix-g-dev.s3.eu-central-1.amazonaws.com/spartacus-trailer.mp4"), filename: "spartacus-trailer.mp4")
spartacus.trailer.attach(io: URI.open("https://nextflix-g-dev.s3.eu-central-1.amazonaws.com/spartacus-trailer.mp4"), filename: "spartacus-trailer.mp4")
spartacus_e1.trailer.attach(io: URI.open("https://nextflix-g-dev.s3.eu-central-1.amazonaws.com/spartacus-trailer.mp4"), filename: "spartacus-trailer.mp4")
stranger_things.trailer.attach(io: URI.open("https://nextflix-g-dev.s3.eu-central-1.amazonaws.com/strangerthings-trailer.mp4"), filename: "strangerthings-trailer.mp4")
money_heist.trailer.attach(io: URI.open("https://nextflix-g-dev.s3.eu-central-1.amazonaws.com/moneyheist-trailer.mp4"), filename: "moneyheist-trailer.mp4")
old_guard.trailer.attach(io: URI.open("https://nextflix-g-dev.s3.eu-central-1.amazonaws.com/oldguard-trailer.mp4"), filename: "oldguard-trailer.mp4")
vikings.trailer.attach(io: URI.open("https://nextflix-g-dev.s3.eu-central-1.amazonaws.com/vikings-trailer.mp4"), filename: "vikings-trailer.mp4")
the_witcher.trailer.attach(io: URI.open("https://nextflix-g-dev.s3.eu-central-1.amazonaws.com/thewitcher-trailer.mp4"), filename: "thewitcher-trailer.mp4")
peaky_blinders.trailer.attach(io: URI.open("https://nextflix-g-dev.s3.eu-central-1.amazonaws.com/peakyblinders-trailer.mp4"), filename: "peakyblinders-trailer.mp4")
lucifer.trailer.attach(io: URI.open("https://nextflix-g-dev.s3.eu-central-1.amazonaws.com/lucifer-trailer.mp4"), filename: "lucifer-trailer.mp4")
