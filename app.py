from flask import Flask, render_template , request, redirect, url_for, session
from flask_mysqldb import MySQL

app = Flask(__name__)
app.secret_key = 'your-secret-key'

#MySQL Configuration
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'flask_users'

mysql = MySQL(app)


@app.route('/')
def structure():
    return render_template('structure.html')

@app.route('/login1', methods=['GET','POST'])
def login():
    
    if request.method == 'POST':
        username = request.form['username']
        pwd = request.form['password']
        cur = mysql.connection.cursor()
        cur.execute(f"select username, password from tbl_users where username = '{username}'")
        user = cur.fetchone()
        cur.close()
        if user and pwd  == user[1]:
            session['username'] = user[0]
            return redirect(url_for('main'))
        else:
            return render_template('login1.html', eror = 'Invalid Username or password')
    return render_template('login1.html')

@app.route('/register1', methods=['GET','POST'])
def register():
    
    if request.method == 'POST':
        username = request.form.get('username')
        pwd = request.form.get('password')
        cur = mysql.connection.cursor()
        cur.execute(f"INSERT INTO tbl_users (username, password) values ('{username}', '{pwd}')")
        mysql.connection.commit()
        cur.close()
        return redirect(url_for('login'))
    return render_template('register1.html')

@app.route('/main')
def main():
    return render_template('main.html')

if __name__ == '__main__':
    app.run(debug=True)