interface CloudProvider {
  storeFile: (name: string) => void;
  getFile: (name: string) => void;
  createServer?: (region: string) => void;
  listServers?: (region: string) => void;
  getCDNAddress?: () => void;
}

class AWS implements CloudProvider {
  public storeFile(name: string) { }
  public getFile(name: string) { }
  public createServer(region: string) { }
  public listServers(region: string) { }
  public getCDNAddress() { }
}

class Dropbox implements CloudProvider {
  public storeFile(name: string) { }
  public getFile(name: string) { }
}