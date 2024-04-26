require 'sintara'

def revers_name(first_name, last_name)
"#{last_name} "{first_name}
end
get '/' do
  erb:index
end
post '/reverse' do
  first_name = param[:first_name]
  last_name = param[:last_name]
  @revers_name = revers_name(first_name, last_name)
  erb:reverse
end
