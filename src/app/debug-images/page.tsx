import Image from 'next/image';

// Add this to your about page or any page to debug
export default function ImageDebugPage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Image Debug Test</h1>
      
      {/* Test direct image access */}
      <img 
        src="/images/OverlayAI.png" 
        alt="Direct img test" 
        style={{ width: '200px', border: '2px solid red' }}
        onError={(e: any) => console.error('Direct img failed:', e)}
        onLoad={() => console.log('Direct img loaded')}
      />
      
      {/* Test Next.js Image */}
      <Image
        src="/images/OverlayAI.png"
        alt="Next.js Image test"
        width={200}
        height={113}
        style={{ border: '2px solid green' }}
        onError={(e: any) => console.error('Next.js Image failed:', e)}
        onLoad={() => console.log('Next.js Image loaded')}
      />
    </div>
  );
}
