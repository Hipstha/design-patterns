interface CloudHostingProvider {
  createServer: (region: string) => void;
  listServer: (region: string) => void;
}

interface CDNProvider {
  getCDNAddress: () => void;
}

interface CloudStorageProvider {
  storeFile: (name: string) => void;
  getFile: (name: string) => void;
}

class AWS2 implements CloudProvider, CDNProvider, CloudStorageProvider {
  public storeFile(name: string) { }
  public getFile(name: string) { }
  public getCDNAddress() { }
  public createServer(region: string) { }
  public listServer(region: string) { }
}

class Dropbox2 implements CloudStorageProvider {
  public storeFile(name: string) { }
  public getFile(name: string) { }
}