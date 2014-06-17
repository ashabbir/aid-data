require 'sinatra'
require 'sinatra/reloader' if development?




set :static, true
set :root, File.dirname(__FILE__)
set :public, 'public'


get '/' do
  erb :index
end