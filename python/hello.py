import mysql

conn= pymysql.connect(host= 'local', user = 'root', password = '', db = 'sonoo')

a= conn.cursor()

sql= 'select * from emp'

a.execute(sql)

countrow = a.execute(sql)
print("rows :" + countrow)
data= a.fetchone()
print(data)
