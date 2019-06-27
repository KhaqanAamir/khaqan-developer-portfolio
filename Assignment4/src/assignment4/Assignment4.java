package assignment4;
public class Assignment4 {
    public static void main(String[] args) throws InterruptedException {
        int [][] arr = new int[200][500]; 
               for(int i=0;i<200;i++){
            for(int j=0;j<500;j++){
                arr[i][j]=i;
            }
        }
        MyThread obj1= new MyThread( arr ,0,"Thread 1");
        MyThread obj2= new MyThread( arr ,50,"Thread 2");       
         MyThread obj3= new MyThread( arr ,100,"Thread 3");        
         MyThread obj4= new MyThread( arr ,150,"Thread 4");
         obj1.start();
         obj2.start();
         obj3.start();
         obj4.start();        
         System.out.println("Success");
    }    
}
