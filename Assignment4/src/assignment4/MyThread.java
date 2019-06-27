
package assignment4;


public class MyThread extends Thread {
    

 public int arr[][]= new int[50][500];

  MyThread(int a[][],int st,String name)
 {
 super(name);


for(int i=0;i<50;i++) 
{
    
     System.arraycopy(a[st], 0, arr[i], 0, 500);    

st++;    
}

 }
 
 @Override
 public void run()
 {
     Thread obj = Thread.currentThread();
    System.out.println(obj);
for(int i=0;i<50;i++) 
{
    for(int j=0;j<500;j++)
    {
        System.out.println(arr[i][j]);
    }
}
    
 }
 
 
 }
    

