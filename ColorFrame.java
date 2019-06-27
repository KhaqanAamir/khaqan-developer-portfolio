import javax.swing.*;
import java.awt.*;
import java.util.*;
class ColorFrame extends JFrame implements Runnable
{
Thread t;
Random r;
Container pane;
        public ColorFrame()
        {
        t=new Thread(this);
        r=new Random();
        pane=getContentPane();
        createAndShowGUI();
        }
        
        private void createAndShowGUI()
        {
        setTitle("Color Frame");
        setSize(400,400);
        setLocationRelativeTo(null);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        
        // Start the thread
        t.start();
        
        // Making it 'look' like your screensaver
        setUndecorated(true);
        setExtendedState(MAXIMIZED_BOTH);
        setVisible(true);
        }
        
        public void run()
        {
            while(true)
            {
            pane.setBackground(new Color(r.nextInt(255),r.nextInt(255),r.nextInt(255)));
                try
                {
                Thread.sleep(1000);
                }catch(Exception e){System.out.println(e);}
            }
        }
        
        public static void main(String args[])
        {
            new ColorFrame();
        }
}