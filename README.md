# dasboard 

cd dashboard
bower install

cp bower_components dashboard

Integrate Experimental DashBoard to Apache

=========================================

Edit /etc/apache2/ports.conf with
Listen	81

Add /etc/apache2/sites-available/000-default.conf

<VirtualHost *:81>
        ServerAdmin webmaster@localhost
        DocumentRoot /home/project/dashboard/src
        <Directory />
                Options Indexes FollowSymLinks Includes +ExecCGI
                AllowOverride All
                Order deny,allow
                Allow from all
                Require all granted
        </Directory>
        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>

Try your browser http://127.0.0.1:81

