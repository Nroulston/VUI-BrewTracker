if Rails.env === 'production' 
  Rails.application.config.session_store :cookie_store, key: '_Vui-BrewTracker', domain: 'name-of-you-app-json-api'
else
  Rails.application.config.session_store :cookie_store, key: '_vui_brewtracker'
end