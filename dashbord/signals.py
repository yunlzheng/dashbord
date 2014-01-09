from blinker import Namespace

signals = Namespace()

instance_updated = signals.signal("instance-updated")
volume_updated = signals.signal("volume-updated")
flovar_updated = signals.signal("flovar-updaed")
image_updated = signals.signal("image-updated")