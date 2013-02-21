require 'rubygems'
require 'sinatra'
require 'slim'

get '/' do
  slim :index
end

# post '/ruby_compile' do
#   pp params
# end

get '/ruby_compile' do
  pp params
end

get '/array/1' do
  slim :index
end