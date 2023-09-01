// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
request("jquery");
require ("bootstrap")
require ("@fontawesome/fontawesome-free")

import toastr from 'toastr';
toastr.options = {
	progressBar: true
}
global.toastr = toastr

require("./includes/properties");