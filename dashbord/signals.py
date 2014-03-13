from blinker import Namespace

signals = Namespace()

resources_updated = signals.signal("resources-updated")
