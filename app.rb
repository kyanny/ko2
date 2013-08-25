require 'sinatra'
require 'json'
require 'faker'

before do
  content_type 'application/json'
end

get '/api/feeds/:id' do
  items = 10.times.map {
    {
      subject: Faker::Lorem.sentence,
      url: Faker::Internet.url,
    }
  }
  { feed_id: params['id'], items: items }.to_json
end
