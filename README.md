# dasboard 

Preparation
============

created bower.json which includes all the dependencies packages

bower install --> will install the necessary packages specified in bower.json and will create bower_components

Development
===========
	bower.json has an entry 
			"main": "src/index.html",
	
	copy bower_components to src directory, if doesn't exists create one.

	cp -r bower_components src


Test Basic Working
==================
Create/Edit src/index.html

<!DOCTYPE html>
<head>
<H1> Hello World </H1>
</head>

Edit /etc/apache2/ports.conf with
	Listen	81

Add /etc/apache2/sites-available/000-default.conf

<VirtualHost *:81>
        ServerAdmin webmaster@localhost
        DocumentRoot /home/krmohan/project/dashboard/src
        <Directory />
                Options Indexes FollowSymLinks Includes ExecCGI
                AllowOverride All
                Order deny,allow
                Allow from all
                Require all granted
        </Directory>
        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>

Try your browser http://127.0.0.1:81
	



