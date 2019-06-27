import java.awt.*;
import javax.swing.*;
class BouncingBalls extends JFrame implements Runnable
{
	private int frameWidth=700, frameHeight=500;
	public Thread thread;
	private Ball ball[]=new Ball[50];
	public BouncingBalls()
	{
		setBounds(100,100,frameWidth,frameHeight);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setVisible(true);
		for(int i=0;i<ball.length;i++)
			ball[i]=new Ball(frameWidth,frameHeight);
		thread=new Thread(this);
		thread.start();
		
	}
	public void paint(Graphics g)
	{
		g.setColor(Color.black);
		g.fillRect(0,0,frameWidth,frameHeight);
		for(int i=0;i<ball.length;i++)
			ball[i].draw(g);
		
	}
	public void run()
	{
		while(true)
		{
			for(int i=0;i<ball.length;i++)
				ball[i].move();
			repaint();
			try
			{
				Thread.sleep(10);
			}
			catch(InterruptedException e)
			{
				System.out.println("Error is Executing Thread"+e);
			}
			
		}
	}
	public static void main(String args[])
	{
		new BouncingBalls();
	}
}